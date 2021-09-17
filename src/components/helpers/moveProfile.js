export default function moveProfile (scrollState, offset, length, profileImg, start, fullScreenHeight, fullScreenWidth, cvContent) {
    let elementLeftPerProcent = start.left / 100;
    let elementTopPerProcent = start.top / 100;
    let elementHeightPerProcent = (fullScreenHeight - start.height) / 100
    let elementWidthPerProcent = (fullScreenWidth - start.width) / 100


    if(scrollState < offset + length && scrollState > offset) {
        profileImg.style.position = "absolute"
        cvContent.style.position = "absolute"
        profileImg.style.left = 0 +(((scrollState - offset)*elementLeftPerProcent) / (length / 100)) + "px"
        profileImg.style.top = 0 +(((scrollState - offset)*elementTopPerProcent) / (length / 100)) + "px"
        profileImg.style.height = fullScreenHeight - (((scrollState - offset)*elementHeightPerProcent) / (length / 100)) + "px"
        profileImg.style.width = fullScreenWidth - (((scrollState - offset)*elementWidthPerProcent) / (length / 100)) + "px"
        
    } else  if (scrollState < offset){
        profileImg.style.position = "absolute"
        cvContent.style.position = "absolute"
        profileImg.style.left = 0;
        profileImg.style.top = 0;
        profileImg.style.height = fullScreenHeight + "px"
        profileImg.style.width = fullScreenWidth + "px"
        
    } else if (scrollState > offset + length) {
        profileImg.style.left = start.left
        profileImg.style.top = start.top
        profileImg.style.height = start.height + "px"
        profileImg.style.width = start.width + "px"
        profileImg.style.position = "unset"
        cvContent.style.position = "unset"
    }
}