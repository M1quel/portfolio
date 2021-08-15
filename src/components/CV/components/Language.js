import React from 'react'

export default function Language(props) {
    

    return (
        <div>
            <p className="lang">{props.lang}</p>
            <span className="langSeperator"></span>
            <p className="langNiveau">{props.niveau}</p>
        </div>
    )
}
