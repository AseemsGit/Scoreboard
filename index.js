let home = document.getElementById("h2_home")
let guest = document.getElementById("h2_guest")

let homescore = 0
let guestscore = 0

function add1_h() {
    homescore += 1
    home.textContent = homescore
}
function add2_h() {
    homescore += 2
    home.textContent = homescore
}
function add3_h() {
    homescore += 3
    home.textContent = homescore
}
function add1_g() {
    guestscore += 1
    guest.textContent = guestscore
}
function add2_g() {
    guestscore += 2
    guest.textContent = guestscore
}
function add3_g() {
    guestscore += 3
    guest.textContent = guestscore
}