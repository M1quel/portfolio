export function positionAbsoluteElement (element, start, direction) {
    element.style.position = "absolute"
    if(direction == "left") {
        element.style.left = start.left + "px"
        
    } else if (direction == "right") {
        element.style.right = start.right + "px"
        console.log(start);
    }
    element.style.top = start.top + "px"
}

export function moveElement (state, length, element, start, direction) {
    var elementPerProcent;
    if(direction == "left") {
        elementPerProcent = (start.left - 50) / 100;
    } else if(direction == "right") {
        elementPerProcent = (start.right + 50) / 100;
    }




    var elementTopProcent = (start.top - 50) / 100;
    if(state <= length) {
        if(direction === "left") {
            element.style.left = start.left * 1 - ((state * elementPerProcent) /3) + "px"
        } else if(direction === "right"){
            element.style.right = start.right * 1 - ((state * elementPerProcent) /3) + "px"

        }
        element.style.top = start.top * 1 - ((state * elementTopProcent) /3) + "px"
        
    } else {
        if(direction  == "left") {
            element.style.left = "50px"
            
        } else if (direction  == "right") {
            element.style.right = "50px"

        }
        element.style.top = "50px"

    }
}