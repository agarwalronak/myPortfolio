import React from 'react';

import { VolunteerCard } from './../VolunteerCard/VolunteerCard';

import './volunteer.css';

export const Volunteers = ({ volunteers }) => {
    return (
        <div className="volunteers-container">
            <div className="industry-skill-container">
                {
                    volunteers.volunteerList.map(volunteer => <VolunteerCard volunteer={volunteer} />)
                }
            </div>
        </div>
    )
}