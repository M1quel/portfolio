import React from 'react'

export default function Education(props) {
    

    return (
        <div className="singleEducation">
            <div>
                <h3 className="sengleEducation__grade">{props.grade}</h3>
                <span className="singleEducation__seperator"></span>
                <p className="singleEducation__location">{props.location}</p>
            </div>
            <p className="singleEducation__date">{props.date}</p>
        </div>
    )
}
