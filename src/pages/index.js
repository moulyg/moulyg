import React from 'react';
import SectionHeader from "../component/SectionHeader";
import Education from "../component/Education";
import {Layout} from "antd";
import './style.css';
import Awards from "../component/Awards";
import TechnicalSkills from "../component/TechnicalSkills";
import TopSkills from "../component/TopSkills";

const {Header, Content, Footer} = Layout;
const MainPage = () => {
    return (

        <Layout>
            <Header>header</Header>
            <Layout>
                <Content>
                    <div className="site-page">
                        <SectionHeader>Top skills</SectionHeader>
                        <TopSkills />
                        <SectionHeader>technical skills</SectionHeader>
                        <TechnicalSkills/>
                        <SectionHeader>education qualification</SectionHeader>
                        <Education/>
                        <SectionHeader>awards</SectionHeader>
                        <Awards/>
                    </div>
                </Content>
            </Layout>
            <Footer>footer</Footer>
        </Layout>
    );
};

export default MainPage;
