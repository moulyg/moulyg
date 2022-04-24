import React from 'react';
import './style.css';
import {Col, Row, Timeline, Typography} from "antd";
import AwardJSON from '../../data/Awards.json';
import {
    TrophyFilled
} from '@ant-design/icons';
const {Text} = Typography;
const Awards = () => {
    return (
        <div>
            <Timeline>
                {
                    AwardJSON && AwardJSON.map(item => (
                        <Timeline.Item color="green" dot={item.won ? <TrophyFilled /> : null}>
                            <Row>
                                <Col span={8}>
                                    <Text strong>{item.placement} {item.competition}</Text>
                                    <Text italic> ({item.year}) - </Text>
                                    <Text>{item.stream}</Text>
                                </Col>
                                <Col span={8} offset={8}>
                                    <div align="right">{item.location}</div>
                                </Col>
                            </Row>
                        </Timeline.Item>))
                }
            </Timeline>
        </div>
    )
};

export default Awards;
