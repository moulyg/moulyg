import React from 'react';
import './style.css';
import {Typography} from "antd";
import TechnicalSkillJSON from '../../data/TechnicalSkills.json';

const {Text} = Typography;
const TechnicalSkills = () => {
    return (
        <div className="tech_skills">
            <h4>&lt;Technical Skills&gt;</h4>
            <div className="items">
                {(TechnicalSkillJSON || []).map(item => <div className="item">
                        <div className="title">{item.type}: </div>
                        <div className="text">{item.skill}</div>
                    </div>
                )}
            </div>
            <h4>&lt;Technical Skills&gt;</h4>
        </div>
    )
};

export default TechnicalSkills;

