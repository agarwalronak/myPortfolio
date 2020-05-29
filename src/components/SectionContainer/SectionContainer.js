import React from 'react';

import { About } from './../About/About';
import { Skills } from './../Skills/Skills';
import { Projects } from './../Projects/Projects';
import { Certificates } from './../Certificates/Certificates';
import { Contacts } from './../Contacts/Contacts';
import { Educations } from './../Education/Education';
import { Pors } from './../Por/Por';
import { Volunteers } from './../Volunteer/Volunteer';

import './section-container.css';

export const SectionContainer = ({
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
        <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">{selectedHeading}</h1>
                <p className="main-quote">{selectedQuote}</p>
            </div>
            <div className="section-component">
                {
                    {
                        about: <About bio={about.bio} />,
                        educations: <Educations educations={educations} />,
                        skills: <Skills skills={skills} />,
                        pors: <Pors pors={pors} />,
                        certificates: <Certificates certificates={certificates} />,
                        volunteers: <Volunteers volunteers={volunteers} />,
                        projects: <Projects projects={projects} />,
                        contacts: <Contacts contacts={contacts} />
                    }[selectedSection]
                }
            </div>
        </div>
    )
}