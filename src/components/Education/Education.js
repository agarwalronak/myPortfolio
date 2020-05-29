import React from 'react';

import { EducationCard } from './../EducationCard/EducationCard';

import './education.css';

export const Educations = ({ educations }) => {
    return (
        <div className="educations-container">
            <div className="industry-skill-container">
                {
                    educations.educationList.map(education => <EducationCard education={education} />)
                }
            </div>
        </div>
    )
}