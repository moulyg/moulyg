import React from 'react';
import Education from "../component/Education";
import {Layout} from "antd";
import ReactFullpage from '@fullpage/react-fullpage';

import './style.css';
import Awards from "../component/Awards";
import TechnicalSkills from "../component/TechnicalSkills";
import TopSkills from "../component/TopSkills";
import Introduction from "../component/Introduction";

const {Header, Content, Footer} = Layout;
const MainPage = () => {
    return (

        <ReactFullpage
            //fullpage options
            licenseKey={'YOUR_KEY_HERE'}
            scrollingSpeed={1000} /* Options here */

            render={({state, fullpageApi}) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <Introduction />
                        </div>
                        <div className="section">
                            <TopSkills/>
                        </div>
                        <div className="section">
                            <TechnicalSkills/>
                        </div>
                        <div className="section">
                            <Education/>
                        </div>
                        <div className="section">
                            <Awards/>
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
};

export default MainPage;
