import React from 'react'
import Education from './components/Education'
import Language from './components/Language'
import "./CV.scss";

export default function Cv(props) {

    return (
        <section className="cv">
            <div className="cvInner">
                <img className="cvInner__profile" src="https://via.placeholder.com/100.png" alt=""/>
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
