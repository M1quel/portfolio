export default function moveCV (cv, scrollState, offset, length, fullScreenHeight, fullScreenWidth) {
    var endHeight = fullScreenHeight * .7;
    var endWidth = fullScreenWidth * .7;

    var heightPerProcent = (fullScreenHeight - endHeight) / 100
    var widthPerProcent = (fullScreenWidth - endWidth) / 100

    if (scrollState > offset && scrollState < offset + length) {
        cv.style.height = Math.floor(fullScreenHeight - (((scrollState - offset)*heightPerProcent) / (length / 100))) + "px"
        cv.style.width = fullScreenWidth - (((scrollState - offset)*widthPerProcent) / (length / 100)) + "px"
        cv.style.marginTop = 0
    } else if (scrollState > offset + length - 100) {
        cv.style.height = endHeight + "px";
        cv.style.width = endWidth + "px";

        var newLength = 500;
        var newOffset = offset + length;
        var endMargin = fullScreenHeight * 2;
        var marginPerProcent = endMargin / 100;

        if(scrollState > newOffset && scrollState < newOffset + newLength) {
            cv.style.marginTop = -1 * (((scrollState - newOffset)*marginPerProcent) / (newLength / 100)) + "px"
        } else if (scrollState > newOffset + newLength){
            cv.style.marginTop = (-1 * endMargin) + "px";
        }


    } else {
        cv.style.height = fullScreenHeight + "px";
        cv.style.width = fullScreenWidth + "px";
        
    }
}