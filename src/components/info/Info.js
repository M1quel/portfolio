import React, { useState } from 'react';
import "./Info.scss";
import { navigate, Router } from "@reach/router";
import Infocontent from './InfoContent';
import openSection from '../openSection';
import Infohover from './InfoHover';

export default function Info(props) {

    return (
        <div onClick={(e) => {openSection(e, props.state, "infoSection"); props.section.setSection("infoSection")}} className="infoSection">
            
            
            <Router>
                <Infohover path="/" />
                <Infocontent path="/info"/>
            </Router>
        </div>
    )
}
