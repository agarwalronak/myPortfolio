import React from 'react';

import './contact-card.css';

export const ContactCard = ({ contact }) => {
    return (
        <div className="contact-card">
            <p><b>{contact.name}:</b> {contact.details}</p>
        </div>
    )
}