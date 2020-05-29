import React from 'react';

import './volunteer-card.css';

export const VolunteerCard = ({ volunteer }) => {
    return (
        <div className="volunteer-card">
            <p><b>{volunteer.companyName}</b></p>
            <p>{volunteer.role}</p>
            <p>{volunteer.time}</p>
            <p>{volunteer.about}</p>
        </div>
    )
}