import React, { useEffect, useRef, useState } from 'react'
import moveCV from '../helpers/moveCV';
import { moveElement } from '../helpers/moveElement';
import moveProfile from '../helpers/moveProfile';
import Education from './components/Education'
import Language from './components/Language'
import "./CV.scss";

export default function Cv(scrollState) {
    var cvRef = useRef();
    var offset = 1500;
    var length = 500;
    var backGroundOffset = offset + length + 200;
    var backGroundLength = 500;
    var fullScreenHeight = window.innerHeight;
    var fullScreenWidth = window.innerWidth;
    var [profileStart, setProfileStart] = useState({})
    var [cvContentStart, setCvContentStart] = useState({})

    //Definer faste værdier herunder
    useEffect(function () {
        var cv = cvRef.current;
        var profileImg = cv.querySelector(".cvInner__profile");
        var cvContent = cv.querySelector(".cvContent");

        setProfileStart(profileImg.getBoundingClientRect());
        setCvContentStart(cvContent.getBoundingClientRect());
    }, [])

    //Konverter til absolute
    useEffect(function () {
        if(!profileStart.left) return
        var cv = cvRef.current;
        //Fullscreen profile IMG
        var profileImg = cv.querySelector(".cvInner__profile");
        profileImg.style.zIndex = "1"
        profileImg.style.position = "absolute";
        profileImg.style.left = "0";
        profileImg.style.top = "0";
        profileImg.style.height = "100vh";
        profileImg.style.width = "100vw";


        //cvContent
        var cvContent = cv.querySelector(".cvContent");
        cvContent.style.position = "absolute";
        cvContent.style.height = cvContentStart.height + "px";
        cvContent.style.width = cvContentStart.width + "px";
        cvContent.style.left = cvContentStart.left + "px";
        cvContent.style.top = cvContentStart.top + "px";

    }, [profileStart.left])

    useEffect(function () {
        var cv = cvRef.current;
        var profileImg = cv.querySelector(".cvInner__profile");
        var cvContent = cv.querySelector(".cvContent")
        if(scrollState.state > offset - 100) {
            moveProfile(scrollState.state, offset, length, profileImg, profileStart, fullScreenHeight, fullScreenWidth, cvContent)
        }
        if(scrollState.state > backGroundOffset - 100) {
            moveCV(cv, scrollState.state, backGroundOffset, backGroundLength, fullScreenHeight, fullScreenWidth);
        }
    }, [scrollState.state])

    return (
        <section ref={cvRef} className="cv">
            <div className="cvInner">
                <img className="cvInner__profile" src="./profilbillede.jpg" alt=""/>
                <span className="cvInner__seperator"></span>
                <div className="cvContent">
                    <header className="cvContentHeader">
                        <h1 className="cvContentHeader__heading">Mikkel Frederiksen</h1>
                        <h3 className="cvContentHeader__profession">Webdeveloper</h3>
                        <p className="cvContentHeader__resume">Jeg er en energisk 18 årig stræbsom ung mand der elsker det jeg laver og når der er noget der interressere mig kan jeg ikke lade det være. Videreudvikling er vigtigt for mig og derfor er jeg nysgerrig og åben for ny læring og nye muligheder.</p>
                    </header>
                    <section className="cvContentMain">
                        <div className="cvLanguages">
                            <h3 className="cvContentMain__heading">Languages</h3>
                            <div className="cvLanguages__wrapper">
                                <Language lang="Danish" niveau="Native language"/>
                                <Language lang="English" niveau="Fluid"/>
                            </div>
                        </div>
                        <div className="cvEducation">
                            <h3 className="cvContentMain__heading">Education</h3>
                            <div>
                                <Education grade="10. Grade, IT line" location="X Class Slagelse" date="August 2018 - June 2019"/>
                                <Education grade="Webudvikler" location="Roskilde Teknisk Skole" date="August 2019 - Now"/>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </section>
    )
}
