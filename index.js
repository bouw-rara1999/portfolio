let prénom = document.querySelector(`#prénom`);
prénom.addEventListener(`click`, function() {
let newp = document.createElement(`div`);
let textp = document.createTextNode(`❤️❤️❤️❤️❤️❤️❤️❤️`);
newp.appendChild(textp);
document.querySelector(`#prénom`).appendChild(newp);
prénom.classList.add(`myFirstName`);
})

let nom = document.querySelector(`#nom`);
nom.addEventListener(`click`, function() {
let newn = document.createElement(`div`);
let textn = document.createTextNode(`👌👌👌👌👌👌👌👌`);
newn.appendChild(textn);
document.querySelector(`#nom`).appendChild(newn);
nom.classList.add(`myLastName`);
})

let age = document.querySelector(`#age`);
age.addEventListener(`click`, function() {
let newa = document.createElement(`div`);
let texta = document.createTextNode(`🥳🥳🥳🥳🥳🥳🥳🥳`);
newa.appendChild(texta);
document.querySelector(`#age`).appendChild(newa);
age.classList.add(`myAge`);
})

let ville = document.querySelector(`#ville`);
ville.addEventListener(`click`, function() {
ville.classList.add(`mycity`);
})



// let realisation = document.querySelector(`#realisation`);
// realisation.addEventListener(`click`, function() {
// let newr = document.createElement(`span`);
// newr.style.width="1000px";
// newr.style.height="1000px";
// realisation.classList.add(`myRealisation`);
// })




  