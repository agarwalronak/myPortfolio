import React from 'react';

import { CertificateCard } from './../CertificateCard/CertificateCard';

import './certificates.css';

export const Certificates = ({ certificates }) => {
    return (
        <div className="certificates-container">
            <div className="industry-skill-container">
                {
                    certificates.certificatesList.map(certificate => <CertificateCard certificate={certificate} />)
                }
            </div>
        </div>
    )
}