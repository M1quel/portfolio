import { navigate } from "@reach/router";
export default function openSection (e, state, sectionClass) {
    if(state.fullscreen) {
        return;
    }
    state.setFullscreen(true)
    e.currentTarget.classList.add("bubble--animation--open");
    setTimeout(function () {
        var section = document.querySelector(`.${sectionClass}`);
        section.classList.add("bubble--fullScreen");
        section.classList.remove("bubble--animation--open");
    }, 1600)
    document.querySelector(".pageHeading").classList.add("pageHeadingInNav")
    navigate(`/${sectionClass === "cases" ? "cases" : "info"}`)
}