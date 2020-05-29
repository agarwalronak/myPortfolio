import React from 'react';

import './sidenav.css';

export const Sidenav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img src={require("C:/Users/ronak/React/portfolio/myportfolio/src/constants/26733485_1576927955733309_6209395833692517777_n.jpg")}
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Ronak Agarwal</h2>
            <p className="subtitle">An MBA aspirant</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("educations")}>Education</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("pors")}>Positions of Responsibility</p>
                <p className="section-list-element" onClick={() => handleSectionClick("certificates")}>Certificates</p>
                <p className="section-list-element" onClick={() => handleSectionClick("volunteers")}>Social Work</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
                <p className="section-list-element" onClick={() => handleSectionClick("contacts")}>Contact Me</p>
            </div>
        </div>
    )
}