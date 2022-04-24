import React from 'react';
import './style.css';
import {Col, Row, Timeline, Typography} from "antd";
import EducationQualification from '../../data/EducationQualification.json';

const {Text} = Typography;
const Education = () => {
    return (
        <div>
            <Timeline>
                {
                    EducationQualification && EducationQualification.map(item => (
                        <Timeline.Item color="green">
                            <Row>
                                <Col span={8}><Text strong>{item.institute}</Text></Col>
                                <Col span={8} offset={8}>
                                    <div align="right">{item.start} - {item.end}</div>
                                </Col>
                            </Row>
                            <div>{item.course}</div>
                            <ul>
                                {item.description && item.description.map(i => <li>{i}</li>)}
                            </ul>
                        </Timeline.Item>))
                }
            </Timeline>
        </div>
    )
};

export default Education;
