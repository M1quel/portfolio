import React, { useEffect, useRef, useState } from 'react';
import {positionAbsoluteElement, moveTitle, moveElement} from '../helpers/moveElement';
import "./Landing.scss"

export default function Landing(scrollState) {
    const landingRef = useRef()
    var length = 300;

    var [siteTitleStart, setSiteTitleStart] = useState({})
    var [seperatorStart, setSeperatorStart] = useState({})

    useEffect(function() {
        var landing = landingRef.current
        var siteTitle = landing.querySelector(".inner__siteTitle")
        var seperator = landing.querySelector(".inner__seperator")
        setSiteTitleStart(siteTitle.getBoundingClientRect());
        setSeperatorStart(seperator.getBoundingClientRect());

    }, [setSiteTitleStart, setSeperatorStart])


    useEffect(function() {
        var landing = landingRef.current
        var siteTitle = landing.querySelector(".inner__siteTitle")
        var seperator = landing.querySelector(".inner__seperator")
        positionAbsoluteElement(siteTitle, siteTitleStart, "left")
        positionAbsoluteElement(seperator, seperatorStart, "right")
    }, [siteTitleStart.left, siteTitleStart.top, seperatorStart.right, seperatorStart.top])


    useEffect(function() {
        var landing = landingRef.current;
        var siteTitle = landing.querySelector(".inner__siteTitle")
        var seperator = landing.querySelector(".inner__seperator")
        moveElement(scrollState.state, length, siteTitle, siteTitleStart, "left")
        moveElement(scrollState.state, length, seperator, seperatorStart, "right")

    }, [scrollState.state, length])

    return (
        <div className="landing" ref={landingRef}>
            <div className="inner">
                <h1 className="inner__siteTitle">Mikkel Frederiksen</h1>
                <span className="inner__seperator"></span>
                <div className="socials">
                    <a className="socials__icon" href="/">S</a>
                    <a className="socials__icon" href="/">S</a>
                    <a className="socials__icon" href="/">S</a>
                </div>
            </div>
        </div>
    )
}
