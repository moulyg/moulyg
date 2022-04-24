import React from 'react';
import './style.css';
import {Col, Progress, Row, Typography} from "antd";
import TopSkillsJSON from '../../data/TopSkills.json';

const {Text} = Typography;
const TopSkills = () => {
    return (
        <Row>
            {TopSkillsJSON && TopSkillsJSON.map(item =>
                <Col span={Math.floor(24 / TopSkillsJSON.length)}>
                    <Progress type="circle" percent={item.rate} width={80} status="exception"
                              format={() => <img width={40} height={40} alt={item.skill}
                                                 src={'images/' + item.image}/>}/>
                </Col>
            )}
        </Row>
    )
};

export default TopSkills;

