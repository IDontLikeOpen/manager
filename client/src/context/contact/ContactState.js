import React, {useReducer} from 'react';
import { v4 as uuid } from 'uuid';
import axios from "axios";
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    GET_CONTACTS,
    CLEAR_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER, CONTACT_ERROR
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts: null,
        current: null,
        filtered: null,
        error: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // get contacts
    const getContacts = async () => {
        try {
            const res = await axios.get('/api/contacts' )
            dispatch({ type: GET_CONTACTS, payload: res.data })

        } catch (err) {
            //how do you know msg
            dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
        }
    }

    // add contact
    const addContact = async contact => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/contacts', contact, config )
            dispatch({ type: ADD_CONTACT, payload: res.data })
        } catch (err) {
            //how do you know msg
            dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
        }
    }

    // del
    const deleteContact = async id => {
        try {
            const res = await axios.delete(`/api/contacts/${id}` )
            dispatch({ type: DELETE_CONTACT, payload: id })
        } catch (err) {
            //how do you know msg
            dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
        }
    }

    // upd
    const updateContact = async contact => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.put(`/api/contacts/${contact._id}`, contact, config )
            dispatch({ type: UPDATE_CONTACT, payload: res.data })
        } catch (err) {
            //how do you know msg
            dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
        }

    }

    // set curr cont
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact })
    }

    // clear curr cont
    const clearCurrent = contact => {
        dispatch({ type: CLEAR_CURRENT })
    }

    // clear contacts
    const clearContacts = contact => {
        dispatch({ type: CLEAR_CONTACTS })
    }

    // upd
    const updateCurrent = contact => {
        dispatch({ type: UPDATE_CONTACT, payload:contact })
    }

    // filter
    const filterContact = text => {
        dispatch({ type: FILTER_CONTACTS, payload: {text} })
    }

    // clear filter
    const clearFilter = contact => {
        dispatch({ type: CLEAR_FILTER })
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                error: state.error,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContact,
                clearFilter,
                getContacts,
                clearContacts
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState