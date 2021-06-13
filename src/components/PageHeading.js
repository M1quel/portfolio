import React, { useState } from 'react';
import "./PageHeading.scss";
import { Link } from "@reach/router";

export default function Pageheading(props) {


    function pageHeadingNormal (e, sectionClass) {
        e.currentTarget.classList.remove("pageHeadingInNav")
        if(props.state.fullscreen) {
            props.state.setFullscreen(false)
            document.querySelector(`.${sectionClass}`).classList.remove("bubble--fullScreen")
            document.querySelector(`.${sectionClass}`).classList.add("bubble--animation--close")
            setTimeout(function() {
                document.querySelector(`.${sectionClass}`).classList.remove("bubble--animation--close")
    
            }, 1600)
        }

    }

    return (
        <Link onClick={(e) => {pageHeadingNormal(e, props.sectionClass.section)}} to="/" className="pageHeading">
            <span className="pageHeading__first">
            M
            </span>
            <span className="pageHeading__last first">
            ikkel
            </span>
            <span className="pageHeading__First">
            F
            </span>
            <span className="pageHeading__last">
            rederiksen
            </span>
      </Link>
    )
}
