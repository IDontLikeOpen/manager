import React, {useReducer} from 'react';
import {uuid} from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
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
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // add

    // del

    // set curr cont

    // clear curr cont

    // upd

    // filter

    // clear filter

    return (
        <ContactContext.Provider>
            value = {{
            contacts: state.contacts
        }}
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState