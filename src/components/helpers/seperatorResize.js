export default function seperatorResize (state, length, element, start) {
    let WidthPerPixel = start.width / length;
    let amountToRemove = WidthPerPixel * state
    let currentWidth = start.width - amountToRemove

    if(state < 1) {
        element.style.width = start.width + "px";
        
    } else if(state >= length) {
        element.style.width = "0px";

    } else {
        element.style.width = currentWidth + "px";
        element.style.left = (start.left + ((start.width - currentWidth) / 2)) + "px";

    }

}