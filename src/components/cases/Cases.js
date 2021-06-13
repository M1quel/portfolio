import React from 'react';
import openSection from '../openSection';
import "./Cases.scss";


export default function Cases(props) {
    

    return (
        <div onClick={(e) => {openSection(e, props.state, "cases"); props.section.setSection("cases")}} className="cases">
            
        </div>
    )
}
