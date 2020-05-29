import React from 'react';

import { Sidenav } from './../SideNav/SideNav';
import { SectionContainer } from './../SectionContainer/SectionContainer';

import './portfolio.css';

export const Portfolio = ({
    handleSectionClick,
    selectedHeading,
    selectedQuote,
    selectedSection,
    about,
    educations,
    skills,
    pors,
    certificates,
    volunteers,
    projects,
    contacts }) => {
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">
                <Sidenav
                    handleSectionClick={handleSectionClick} />
            </div>

            <div className="main-section-container">
                <SectionContainer
                    selectedSection={selectedSection}
                    selectedHeading={selectedHeading}
                    selectedQuote={selectedQuote}
                    about={about}
                    educations={educations}
                    skills={skills}
                    pors={pors}
                    certificates={certificates}
                    volunteers={volunteers}
                    projects={projects}
                    contacts={contacts} 
                    />
            </div>
        </div>
    )
}