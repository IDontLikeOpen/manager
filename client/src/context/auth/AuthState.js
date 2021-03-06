import React, {useReducer} from 'react';
import { v4 as uuid } from 'uuid';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from "../../utils/setAuthToken";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types'
import axios from "axios";

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthed: null,
        loading: true,
        user:null,
        error: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    // Load user
    const loadUser = async () => {
        if(localStorage.token) {
            setAuthToken(localStorage.token)
        }

        try {
            const res = await axios.get('/api/auth') // ??

            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: AUTH_ERROR
            })
        }
    }

    // Register user
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('api/users', formData, config)

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })

            loadUser()
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })
        }
    }

    // Login user
    const loginUser = async formData  => {
        // WHY NEED THIS
        const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            try {
                const res = await axios.post('api/auth', formData, config)

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                })

                loadUser()
            } catch (err) {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: err.response.data.msg
                })
            }

    }

    // Clear errs
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS })

    // logout
    const logout = () => dispatch({ type: LOGOUT })

    return (
        <AuthContext.Provider
            value={{
                logout,
                register,
                loadUser,
                loginUser,
                clearErrors,
                token: state.token,
                isAuthed: state.isAuthed,
                loading: state.loading,
                user: state.user,
                error: state.error
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState