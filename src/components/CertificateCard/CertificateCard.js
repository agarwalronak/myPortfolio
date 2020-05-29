import React from 'react';

import './certificate-card.css';

export const CertificateCard = ({ certificate }) => {
    return (
        <div className="certificate-card">
            <p><b>Name:</b> {certificate.name}</p>
            <p><b>Description:</b> {certificate.description}</p>
        </div>
    )
}