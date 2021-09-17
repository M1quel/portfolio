import React, { useEffect, useRef } from 'react';
import "./Cases.scss";
import Case from './components/Case';
import firstCaseIn from './components/firstCaseIn';
import secondCaseIn from './components/secondCaseIn';
import caseData from "../cases.json";

export default function Cases(scrollState) {
    const casesRef = useRef();
    var offset = 3000;
    var lengthFirstStep = 1000;
    var lengthSecondStep = 1500;
    var fullScreenWidth = window.innerWidth;
    var fullScreenHeight = window.innerHeight;
    
    useEffect(function () {
        var cases = casesRef.current;
        var gap = 400
        var firstCase = cases.getElementsByClassName("case")[0]
        var secondCase = cases.getElementsByClassName("case")[1]
        if(scrollState.state > offset - 100 && scrollState.state < offset + lengthFirstStep + 100) {
            firstCaseIn(firstCase, scrollState.state, lengthFirstStep, fullScreenWidth, offset, fullScreenHeight)
        }else if (scrollState.state > offset + lengthFirstStep && scrollState.state < offset + lengthFirstStep + gap) {
            firstCase.querySelector(".caseIMG").classList.add("caseIMG--active")

        } else if (scrollState.state > offset + lengthFirstStep + gap) {
            firstCase.querySelector(".caseIMG").classList.remove("caseIMG--active")
            secondCaseIn(firstCase, secondCase, scrollState.state, lengthSecondStep, fullScreenWidth, offset + lengthFirstStep + gap, fullScreenHeight)
        }

    }, [scrollState.state])

    return (
        <section className="cases" ref={casesRef}>
            <Case case={caseData.featuredCases[0]} img="https://via.placeholder.com/100.png" heading="Hej med dig"/>
            <Case case={caseData.featuredCases[1]} img="https://via.placeholder.com/100.png" heading="din ko"/>
        </section>
    )
}
