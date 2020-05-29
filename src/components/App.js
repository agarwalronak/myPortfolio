import React, { Component } from 'react';

import { Portfolio } from './Portfolio/Portfolio';

import { about } from './../constants/About';
import { skills } from './../constants/Skills';
import { projects } from './../constants/Project';
import { certificates } from './../constants/Certificates';
import { contacts } from './../constants/Contact';
import { educations } from './../constants/Education';
import { pors } from './../constants/Por';
import { volunteers } from './../constants/Volunteer';

import './App.css';

class App extends Component {
    constructor () {
        super();

        this.state = {
            selectedSection: "",
            selectedHeading: "",
            selectedQuote: "",
            about: null,
            educations: null,
            skills: null,
            pors: null,
            certificates: null,
            volunteers: null,
            projects: null,
            contacts: null,
        };
    }

    componentWillMount () {
        this.setState({
            about,
            educations,
            skills,
            pors,
            certificates,
            volunteers,
            projects,
            contacts,
            selectedHeading: about.heading,
            selectedQuote: about.quote,
            selectedSection: "about"
        });
    }

    handleSectionClick = (section) => {
        this.setState({
            selectedSection: section,
            selectedHeading: this.state[section].heading,
            selectedQuote: this.state[section].quote
        })
    }

    render () {
        return (
            <div className="App">
                <Portfolio
                    handleSectionClick={this.handleSectionClick}
                    selectedSection={this.state.selectedSection}
                    selectedHeading={this.state.selectedHeading}
                    selectedQuote={this.state.selectedQuote}
                    about={this.state.about}
                    educations={this.state.educations}
                    skills={this.state.skills}
                    pors={this.state.pors}
                    certificates={this.state.certificates}
                    volunteers={this.state.volunteers}
                    projects={this.state.projects}
                    contacts={this.state.contacts}
                />
            </div>
        );
    }
}

export default App;
