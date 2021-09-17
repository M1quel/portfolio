import React from 'react';
import "./Case.scss";

export default function Case(props) {


    return (
        <div className="case">
            <div className="case__inner">
                <img className="caseIMG" src={props.case.image} alt="CaseIMG" />
                <div className="case__content">
                    <div>
                        <h1 className="title">{props.case.title}</h1>
                        <p className="education">{props.case.education}</p>
                    </div>
                    <p className="description">{props.case.description}</p>
                    <div className="caseCtaWrapper">
                        <a className="githubCta caseCTA" target="_blank" href={props.case.githubLink}><i class="fab fa-github"></i> Github</a>
                        <a className="siteCta caseCTA" target="_blank" href={props.case.siteLink}><i class="fas fa-external-link-alt"></i> Open site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
