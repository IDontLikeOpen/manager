import React, {Fragment, useContext} from 'react';
import ContactContext from '../../context/contact/contactContext'

const Contact = () => {
    const contactContext = useContext(ContactContext)

    const { contacts } = contactContext

    return (
        <Fragment>
            { contacts.map(el => {
                <h3>{el.name}</h3>
            }) }
        </Fragment>
    );
}

export default Contact;