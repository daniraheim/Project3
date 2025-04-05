import React from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";

function NewContact ({ onNew }) {
    const navigate = useNavigate();

    function handleContact (newContact) {
        onNew(newContact);
        navigate("/contact");
        navigate("/");

    }

    return <ContactForm 
            initialData={{ firstName: "", lastName: "", email: "", comments: ""}} 
            onSubmit={handleContact}/>   
}

export default NewContact;