var headerHoverWidth = 60
var headerHoverHeight = 80
var headerHeight = "70vh"

export default {
    cv: function () {
        document.querySelector(".mainSection__cv").style.width = headerHoverWidth + "vw"
        document.querySelector(".mainSection__contact").style.width = (100 - headerHoverWidth) + "vw"
        
        document.querySelector(".mainSection__cv").style.height = headerHoverHeight + "vh"
        document.querySelector(".mainSection__contact").style.height = headerHoverHeight + "vh"
    },
    contact: function () {
        document.querySelector(".mainSection__cv").style.width = (100 - headerHoverWidth) + "vw"
        document.querySelector(".mainSection__contact").style.width = headerHoverWidth + "vw"
        
        document.querySelector(".mainSection__cv").style.height = headerHoverHeight + "vh"
        document.querySelector(".mainSection__contact").style.height = headerHoverHeight + "vh"

    },
    projects: function () {
        document.querySelector(".mainSection__cv").style.width = "50vw"
        document.querySelector(".mainSection__contact").style.width = "50vw"

        document.querySelector(".mainSection__cv").style.height = headerHeight
        document.querySelector(".mainSection__contact").style.height = headerHeight
        
    }
}