import React from 'react';

import './por-card.css';

export const PorCard = ({ por }) => {
    return (
        <div className="por-card">
            <p><b>{por.name}</b></p>
            <p>{por.event}</p>
            <p>{por.description}</p>
        </div>
    )
}