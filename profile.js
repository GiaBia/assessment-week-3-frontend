const colorBtn = document.querySelector("#color")
const favePlaceBtn = document.querySelector("#place")
const ritualBtn = document.querySelector("#ritual")

function alertColor() {
    alert("My favourite colour is Pink!")
}

function alertPlace() {
    alert("My favourite place is the beach!")
}

function alertRitual() {
    alert("My favourite ritual is lighting sage every night.")
}

colorBtn.addEventListener(`click`, alertColor)

favePlaceBtn.addEventListener(`click`, alertPlace)

ritualBtn.addEventListener(`click`, alertRitual)
