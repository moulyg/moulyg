import React from 'react';
import './style.css';
import {Col, List, Row, Timeline, Typography} from "antd";
import TechnicalSkillJSON from '../../data/TechnicalSkills.json';

const {Text} = Typography;
const TechnicalSkills = () => {
    return (
        <div>
            <List
                size="small"
                bordered
                dataSource={TechnicalSkillJSON || []}
                renderItem={item => <List.Item>
                    <Text strong>{item.type}: </Text>
                    <Text>{item.skill}</Text>
                </List.Item>}
            />
        </div>
    )
};

export default TechnicalSkills;

