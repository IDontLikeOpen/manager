import React, { useContext, useEffect } from 'react';
import Contact from "../contact/Contact";
import ContactForm from "../contact/ContactForm";
import ContactFilter  from "../contact/ContactFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
    const authContext = useContext(AuthContext)

    useEffect(() => {
        authContext.loadUser()
        // eslint-disable-next-line
    },[])

    return (
        <div>
            <h1>Home</h1>
            <div>
                <ContactFilter/>
                <ContactForm />
            </div>
            <div>
                <Contact/>
            </div>
        </div>
    );
}


export default Home;