import React from 'react';
import './style.css';
import {Typography} from "antd";
import profile from '../../images/profile.png';

const {Text} = Typography;
const Introduction = () => {
    return (
        <div className="introduction">

            <div className="left-section">
                <img className="profile_image" src={profile}/>
            </div>
            <div className="right-section">
                <h2>Hello, I’m</h2>
                <h1>Mouly Gunarathne</h1>
                <p>A Senior software professional with 12+ years of experience in the IT industry with proven expertise
                    in both
                    front-end and back-end software development. Proficiency in working with time-critical and
                    mission-critical
                    tasks throughout the complete SDLC using various tools and technologies. Technical Lead who
                    possesses work
                    exposure in different platforms including Telecommunication, Banking, Aviation and Stock Trading
                    industry
                    domains with experience of working global locations. A good team player, mentoring juniors,
                    conducting code
                    reviews and training sessions, thrive under pressure and led the teams to achieve company goals
                    collectively. 3
                    times UI Prototype Champion in international Topcoder Open programming competition.
                </p>
                <a href="">Download my CV</a>
            </div>
        </div>
    )
};

export default Introduction;
