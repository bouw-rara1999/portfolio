let toggle = document.querySelector(`.toggle`);
let body = document.querySelector(`body`);
toggle.addEventListener(`click`, function() {
body.classList.add(`open`);
})

let prénom = document.querySelector(`#prénom`);
prénom.addEventListener(`click`, function() {
let newp = document.createElement(`div`);
let textp = document.createTextNode(`❤️❤️❤️❤️❤️❤️❤️❤️`);
newp.appendChild(textp);
document.querySelector(`#prénom`).appendChild(newp);
prénom.classList.add(`myname`);
})
