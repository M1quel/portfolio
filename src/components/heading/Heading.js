import React from 'react';
import "./Heading.scss";
import { Link } from "@reach/router";

export default function Heading(props) {
    

    return (
        <Link className="pageHeading" to="/hej">Hej med dig</Link>
    )
}
