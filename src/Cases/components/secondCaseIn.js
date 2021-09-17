export default function secondCaseIn (firstCase, element, scrollState, length, fullScreenWidth, offset, fullScreenHeight) {
    var partOneLength = 500;
    var partTwoLength = 500;
    var partThreeLength = 500;
    var firstCaseInner = firstCase.querySelector(".case__inner")
    var startCaseHeight = fullScreenHeight * .8
    var startCaseWidth = fullScreenWidth * .8
    var heightPerProcent = (fullScreenHeight - startCaseHeight) / 100
    var widthPerProcent = (fullScreenWidth - startCaseWidth) / 100
    var marginPerProcent = (fullScreenHeight) / 100;
    var cases = document.querySelector(".cases");
    if(scrollState > offset && scrollState < offset + 100) {
        firstCaseInner.style.height = fullScreenHeight + "px"
        firstCaseInner.style.width = fullScreenWidth + "px"

    }
    if(scrollState > offset + 100 && scrollState < offset + partOneLength) {
        firstCaseInner.style.height = fullScreenHeight - (((scrollState - (offset))*heightPerProcent) / (partOneLength / 100)) + "px"
        firstCaseInner.style.width = fullScreenWidth - (((scrollState - (offset))*widthPerProcent) / (partOneLength / 100)) + "px"
        firstCase.style.marginLeft = 0
        
    } else if (scrollState > offset + partOneLength) {
        firstCaseInner.style.height = startCaseHeight + "px"
        firstCaseInner.style.width = startCaseWidth + "px"

        if (scrollState < offset + partOneLength + partTwoLength) {
            var marginPerProcent = fullScreenWidth / 100;

            firstCase.style.marginLeft = 0 - (((scrollState - (offset + partOneLength))*marginPerProcent) / (partOneLength / 100)) + "px"
        } else if (scrollState > offset + partOneLength + partTwoLength && scrollState < offset + partOneLength + partTwoLength + partThreeLength) {
            firstCase.style.marginLeft = -1 * fullScreenWidth + "px"
            var secondCaseInner = element.querySelector(".case__inner")
            secondCaseInner.style.height = startCaseHeight + (((scrollState - (offset + partOneLength + partTwoLength))*heightPerProcent) / ((partOneLength) / 100)) + "px"
            secondCaseInner.style.width = startCaseWidth + (((scrollState - (offset + partOneLength + partTwoLength))*widthPerProcent) / (partOneLength / 100)) + "px"
            element.querySelector(".caseIMG").classList.remove("caseIMG--active")
        } else if (scrollState > offset + partOneLength + partTwoLength + partThreeLength && scrollState < offset + partOneLength + partTwoLength + partThreeLength + 400) {
            var secondCaseInner = element.querySelector(".case__inner")
            secondCaseInner.style.height = fullScreenHeight + "px"
            secondCaseInner.style.width = fullScreenWidth + "px"
            element.querySelector(".caseIMG").classList.add("caseIMG--active")
            
        } else if (scrollState > offset + partOneLength + partTwoLength + partThreeLength + 400 && scrollState < offset + partOneLength + partTwoLength + partThreeLength + 400 + 500) {
            element.querySelector(".caseIMG").classList.remove("caseIMG--active")
            var secondCaseInner = element.querySelector(".case__inner")
            secondCaseInner.style.height = fullScreenHeight - (((scrollState - (offset + partOneLength + partTwoLength + partThreeLength + 400))*heightPerProcent) / ((partOneLength) / 100)) + "px"
            secondCaseInner.style.width = fullScreenWidth - (((scrollState - (offset + partOneLength + partTwoLength + partThreeLength + 400))*widthPerProcent) / (partOneLength / 100)) + "px"
            cases.style.marginTop = 0
            
        } else if (scrollState > offset + partOneLength + partTwoLength + partThreeLength + 400 + 500 && scrollState < offset + partOneLength + partTwoLength + partThreeLength + 400 + 500 + 500) {
            var secondCaseInner = element.querySelector(".case__inner")
            secondCaseInner.style.height = startCaseHeight + "px"
            secondCaseInner.style.width = startCaseWidth + "px";
            cases.style.marginTop = 0 - (((scrollState - (offset + partOneLength + partTwoLength + partThreeLength + 400 + 500))*marginPerProcent) / ((partOneLength) / 100)) + "px"
        } else if ( scrollState >= offset + partOneLength + partTwoLength + partThreeLength + 400 + 500 + 500 - 10 ) {
            cases.style.marginTop = -1 * fullScreenHeight + "px"
            console.log(scrollState)

        }
    }

}   