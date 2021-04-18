import React, {Fragment, useContext} from 'react';
import ContactItem from "./ContactItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ContactContext from '../../context/contact/contactContext'

const Contact = () => {
    const contactContext = useContext(ContactContext)

    const {contacts, filtered} = contactContext

    return (
        <Fragment>
            <TransitionGroup>
                {filtered !== null ? (
                    filtered.map(el =>
                        (
                            <CSSTransition key={el.id} timeout={500} classNames="item">
                                <ContactItem  contact={el}/>
                            </CSSTransition>
                        )
                    )
                ) : (
                    contacts.map(el =>
                        (
                            <CSSTransition key={el.id} timeout={500} classNames="item">
                                <ContactItem contact={el}/>
                            </CSSTransition>
                        )
                    )
                )}
            </TransitionGroup>
        </Fragment>
    );
}

export default Contact;