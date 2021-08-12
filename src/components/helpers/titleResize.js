export default function titleResize (state, length, titleElement, startFontSize, spansWidthStart) {
    var endFontSize = 30;
    var startWordGap = 20;
    
    
    let spanWidthPerPixel = (spansWidthStart * 1) / length;
    let WordGapPerPixel = 20 / length;
    let startFontSizeNum = startFontSize.split("px")[0];
    let fontToRemove = startFontSizeNum * 1 - endFontSize;
    let fontToRemovePerPixel = fontToRemove * 1 / length * 1;
    let toRemove = fontToRemovePerPixel * state
    if(state >= length) {
        titleElement.style.fontSize = endFontSize;
        titleElement.getElementsByClassName("minimize")[0].style.maxWidth = "0px";
        titleElement.getElementsByClassName("minimize")[0].style.marginRight = "0px";
        titleElement.getElementsByClassName("minimize")[1].style.maxWidth = "0px";
    } else if (state < 1) {
        titleElement.getElementsByClassName("minimize")[0].style.maxWidth = spansWidthStart + "px";
        titleElement.getElementsByClassName("minimize")[0].style.marginRight = startWordGap + "px";
        titleElement.getElementsByClassName("minimize")[1].style.maxWidth = spansWidthStart + "px";
        titleElement.style.fontSize = startFontSize;
    } else {
        titleElement.getElementsByClassName("minimize")[0].style.maxWidth = (spansWidthStart - (spanWidthPerPixel * state)) + "px";
        titleElement.getElementsByClassName("minimize")[0].style.marginRight = (startWordGap - (WordGapPerPixel * state)) + "px";
        titleElement.getElementsByClassName("minimize")[1].style.maxWidth = (spansWidthStart - (spanWidthPerPixel * state)) + "px";
        titleElement.style.fontSize = startFontSizeNum - toRemove + "px";
    }
}