import React from 'react';

import { ContactCard } from './../ContactCard/ContactCard';

import './contacts.css';

export const Contacts = ({ contacts }) => {
    return (
        <div className="conatacts-container">
            <div className="industry-skill-container">
                {
                    contacts.contactList.map(contact => <ContactCard contact={contact} />)
                }
            </div>
        </div>
    )
}