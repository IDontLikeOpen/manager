import React, {useReducer} from 'react';
import { v4 as uuid } from 'uuid';
import AuthContext from './authContext';
import authReducer from './authReducer';
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

    // Register user
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('api/users, formData, config')
        } catch (err) {

        }
    }

    // Login user

    // Clear errs

    return (
        <AuthContext.Provider
            value={{
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