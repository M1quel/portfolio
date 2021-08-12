import React, { useEffect, useRef, useState } from 'react';
import {positionAbsoluteElement, moveTitle, moveElement} from '../helpers/moveElement';
import seperatorResize from '../helpers/seperatorResize';
import titleResize from '../helpers/titleResize';
import "./Landing.scss"

export default function Landing(scrollState) {
    const landingRef = useRef()
    var length = 1500;
    
    var [siteTitleStart, setSiteTitleStart] = useState({})
    var [seperatorStart, setSeperatorStart] = useState({})
    var [socialsStart, setSocialsStart] = useState({})
    var [titleFontSize, setTitleFontSize] = useState("")
    var [spansWidthStart, setSpansWidthStart] = useState()
    
    //Definer faste værdier her under
    useEffect(function() {
        var landing = landingRef.current
        var siteTitle = landing.querySelector(".inner__siteTitle")
        var seperator = landing.querySelector(".inner__seperator")
        var socials = landing.querySelector(".socials")
        setSiteTitleStart(siteTitle.getBoundingClientRect());
        setSeperatorStart(seperator.getBoundingClientRect());
        setSocialsStart(socials.getBoundingClientRect());
        
        setTitleFontSize(window.getComputedStyle(siteTitle).fontSize)
        setSpansWidthStart(window.getComputedStyle(siteTitle.querySelectorAll(".minimize")[1]).width.split("px")[0]);
        
    }, [setSiteTitleStart, setSeperatorStart, setTitleFontSize, setSpansWidthStart])

    //Konverter til absolute her under
    useEffect(function() {
        var landing = landingRef.current
        var siteTitle = landing.querySelector(".inner__siteTitle")
        var seperator = landing.querySelector(".inner__seperator")
        var socials = landing.querySelector(".socials")
        positionAbsoluteElement(siteTitle, siteTitleStart, "left")
        positionAbsoluteElement(seperator, seperatorStart, "left")
        positionAbsoluteElement(socials, socialsStart, "right")
    }, [siteTitleStart.left, siteTitleStart.top, seperatorStart.right, seperatorStart.top])

    //Koden der rykker elementer her
    useEffect(function() {
        var landing = landingRef.current;
        var siteTitle = landing.querySelector(".inner__siteTitle")
        var socials = landing.querySelector(".socials")
        var seperator = landing.querySelector(".inner__seperator")
        moveElement(scrollState.state, length, siteTitle, siteTitleStart, "left")

        titleResize(scrollState.state, length, siteTitle, titleFontSize, spansWidthStart)
        
        moveElement(scrollState.state, length, socials, socialsStart, "right")

        seperatorResize(scrollState.state, length, seperator, seperatorStart)

    }, [scrollState.state, length, spansWidthStart])

    return (
        <div className="landing" ref={landingRef}>
            <div className="inner">
                <h1 className="inner__siteTitle">M<span className="minimize">ikkel</span> F<span className="minimize">rederiksen</span></h1>
                <div className="inner__seperator"></div>
                <div className="socials">
                    <a className="socials__icon" href="/">S</a>
                    <a className="socials__icon" href="/">S</a>
                    <a className="socials__icon" href="/">S</a>
                </div>
            </div>
        </div>
    )
}
