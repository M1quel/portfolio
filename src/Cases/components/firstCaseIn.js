export default function firstCaseIn (element, scrollState, length, fullScreenWidth, offset, fullScreenHeight) {
    var marginPerProcent = fullScreenWidth / 100;
    var marginLength = length / 2;
    
    if(scrollState > offset && scrollState < (offset + (marginLength))) {
        //Swipes the first case to the viewport
        element.style.marginLeft = fullScreenWidth - (((scrollState - offset)*marginPerProcent) / (marginLength / 100)) + "px"
    
    } else if (scrollState > (offset + marginLength)) {
        element.style.marginLeft = 0 + "px"
        var caseStartHeight = fullScreenHeight * .8;
        var caseStartWidth = fullScreenWidth * .8;
        var caseInner = element.querySelector(".case__inner");
        var heightPerProcent = (fullScreenHeight - caseStartHeight) / 100
        var widthPerProcent = (fullScreenWidth - caseStartWidth) / 100
        
        if(scrollState > offset + marginLength && scrollState < offset + length) {
            //Zooms into first case
            caseInner.style.height = caseStartHeight + (((scrollState - (offset+ marginLength))*heightPerProcent) / (marginLength / 100)) + "px"
            caseInner.style.width = caseStartWidth + (((scrollState - (offset+ marginLength))*widthPerProcent) / (marginLength / 100)) + "px"
            caseInner.querySelector(".caseIMG").classList.remove("caseIMG--active")
            
            
        }
        else if ( scrollState > offset + length ) {
            // console.log("Den her kører")
            caseInner.querySelector(".caseIMG").classList.add("caseIMG--active")        
            caseInner.style.width = "100vw"
            caseInner.style.height = "100vh"
        } else {
            caseInner.style.height = caseStartHeight
            caseInner.style.height = caseStartWidth
        }
        
        
    } else if (scrollState < offset) {
        element.style.marginLeft = fullScreenWidth + "px"
    }
}