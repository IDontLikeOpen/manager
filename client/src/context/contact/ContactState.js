import React, {useReducer} from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jilly J',
                email: 'jilly@gmail.com',
                phone: '111-111-3254',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Jilly Mon',
                email: 'jillyMn@gmail.com',
                phone: '111-111-6677',
                type: 'professional'
            },
            {
                id: 3,
                name: 'Jilly Justice',
                email: 'jillyJustice@gmail.com',
                phone: '111-111-5555',
                type: 'professional'
            },
            {
                id: 4,
                name: 'Jilly Wonka',
                email: 'jillyWonka@gmail.com',
                phone: '111-111-2222',
                type: 'personal'
            }
        ],
        current: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // add
    const addContact = contact => {
        contact.id = uuid.v4()
        dispatch({ type: ADD_CONTACT, payload: contact })
    }

    // del
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }

    // upd
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })
    }

    // set curr cont
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact })
    }

    // clear curr cont
    const clearCurrent = contact => {
        dispatch({ type: CLEAR_CURRENT })
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
                clearFilter
            }}
        >

            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState