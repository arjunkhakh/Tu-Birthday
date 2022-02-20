var tudor = document.querySelector("#tudor")
var arjun = document.querySelector("#arjun")
var rukzi = document.querySelector("#rukzi")
var winter = document.querySelector("#winter")
var labels = document.querySelector("#label")

tudor.addEventListener("click", function () {
    arjun.setAttribute("style", "display:block");
    rukzi.setAttribute("style", "display:block");
    winter.setAttribute("style", "display:block");
    tudor.setAttribute("style", "display:none")
    labels.setAttribute("style", "display:none")
})

var wintaArrow = document.querySelector("#wintaArrow")
var arjunArrow = document.querySelector("#arjunArrow")
var rukziArrow = document.querySelector("#rukziArrow")

var wintaMes = document.querySelector("#wintaMessage")
var arjunMes = document.querySelector("#arjunMessage")
var rukziMes = document.querySelector("#rukziMessage")

wintaArrow.addEventListener("click", function () {
    wintaMes.setAttribute("style", "display:block");
})

arjunArrow.addEventListener("click", function () {
    arjunMes.setAttribute("style", "display:block");
})
rukziArrow.addEventListener("click", function () {
    rukziMes.setAttribute("style", "display:block");
})


