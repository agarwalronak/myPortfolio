import React from 'react';

import { PorCard } from './../PorCard/PorCard';

import './por.css';

export const Pors = ({ pors }) => {
    return (
        <div className="pors-container">
            <div className="industry-skill-container">
                {
                    pors.positionsList.map(por => <PorCard por={por} />)
                }
            </div>
        </div>
    )
}