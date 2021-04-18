import React, {Fragment} from 'react';
import Contact from "../contact/Contact";
import ContactForm from "../contact/ContactForm";
import ContactFilter  from "../contact/ContactFilter";

const Home = () => {
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