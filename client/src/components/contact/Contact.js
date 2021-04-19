import React, {Fragment, useContext, useEffect} from 'react';
import ContactItem from "./ContactItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ContactContext from '../../context/contact/contactContext'
import Spinner from "../layout/Spinner";

const Contact = () => {
    const contactContext = useContext(ContactContext)

    const { contacts, filtered, getContacts, loading } = contactContext

    // why use this eslint shit
    useEffect(() => {
        getContacts()
        // eslint-disable-next-line
    }, [])

    if( contacts && !loading && contacts.length ===0 ) {
        return <h4>Please add a contact</h4>
    }

    return (
        <Fragment>
            {contacts !==null && !loading ? (
                <TransitionGroup>
                    {filtered !== null ? (
                        filtered.map(el =>
                            (
                                <CSSTransition key={el._id} timeout={500} classNames="item">
                                    <ContactItem  contact={el}/>
                                </CSSTransition>
                            )
                        )
                    ) : (
                        contacts.map(el =>
                            (
                                <CSSTransition key={el._id} timeout={500} classNames="item">
                                    <ContactItem contact={el}/>
                                </CSSTransition>
                            )
                        )
                    )}
                </TransitionGroup>
            ) : <Spinner/>}
        </Fragment>
    );
}

export default Contact;