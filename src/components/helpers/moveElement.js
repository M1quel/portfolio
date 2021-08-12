export function positionAbsoluteElement (element, start, direction) {
    element.style.position = "absolute"
    if(direction == "left") {
        element.style.left = start.left + "px"
        
    } else if (direction == "right") {
        element.style.right = (start.right - start.width) + "px"
    }
    element.style.top = start.top + "px"
}

export function moveElement (state, length, element, start, direction) {
    let elementPerProcent;
    if(direction == "left") {
        elementPerProcent = (start.left * 1 - 50) / 100;
    } else if(direction == "right") {
        elementPerProcent = ((start.right - start.width) - 50) / 100;
    }




    var elementTopProcent = (start.top - 50) / 100;
    if(state < length) {
        if(direction === "left") {
            element.style.left = start.left * 1 - ((state * elementPerProcent) / (length / 100)) + "px"
        } else if(direction === "right"){
            element.style.right = (start.right - start.width) * 1 - ((state * elementPerProcent) /(length / 100)) + "px"

        }
        element.style.top = start.top * 1 - ((state * elementTopProcent) /(length / 100)) + "px"
        
    } else if(state >= length){
        if(direction  == "left") {
            element.style.left = "50px"
            
        } else if (direction  == "right") {
            element.style.right = "50px"

        }
        element.style.top = "50px"

    } else if(state < 1) {
        if(direction === "left") {
            element.style.let = start.left
        } else if (direction === "right") {
            element.style.right = (start.right - start.width)
        }
    }
}