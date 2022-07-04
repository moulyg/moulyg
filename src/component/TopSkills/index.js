import React from 'react';
import './style.css';
import TopSkillsJSON from '../../data/TopSkills.json';

const TopSkills = () => {
    return (
        <div className="top_skills">
            <h4>&lt;Top Skills&gt;</h4>
            <div className="items">
                {TopSkillsJSON && TopSkillsJSON.map(item =>
                    <div className="item">
                        <img width={40} height={40} alt={item.skill}
                             src={'images/' + item.image}/>
                    </div>
                )}
            </div>
            <h4>&lt;Top Skills/&gt;</h4>
        </div>
    )
};

export default TopSkills;

