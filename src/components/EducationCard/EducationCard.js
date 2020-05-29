import React from 'react';

import './education-card.css';

export const EducationCard = ({ education }) => {
    return (
        <div className="education-card">
            <p><b>{education.name}</b></p>
            <p>{education.description}</p>
            <p>{education.year}</p>
            <p>{education.grade}</p>
        </div>
    )
}