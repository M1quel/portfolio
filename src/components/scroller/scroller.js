import React, { useEffect, useRef } from 'react';
import "./scroller.scss";

export default function Scroller(scrollState) {
    var scroll = useRef();

    useEffect(function () {
        const outer = scroll.current;
        const inner = outer.querySelector(".scrollInner");
        document.addEventListener("scroll", function () {
            let rect = inner.getBoundingClientRect();
            scrollState.setState(rect.top * -1)
        })
    }, [])

    return (
        <div className="scrollOuter" ref={scroll}>
            <div className="scrollInner">

            </div>
        </div>
    )
}
