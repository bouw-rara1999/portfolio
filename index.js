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
prénom.classList.add(`myFirstName`);
})

let nom = document.querySelector(`#nom`);
nom.addEventListener(`click`, function() {
let newn = document.createElement(`div`);
let textn = document.createTextNode(`👌👌👌👌👌👌👌👌`);
newn.appendChild(textn);
document.querySelector(`#nom`).appendChild(newn);
prénom.classList.add(`myLastName`);
})

let age = document.querySelector(`#age`);
age.addEventListener(`click`, function() {
let newa = document.createElement(`div`);
let texta = document.createTextNode(`🥳🥳🥳🥳🥳🥳🥳🥳`);
newa.appendChild(texta);
document.querySelector(`#age`).appendChild(newa);
prénom.classList.add(`myAge`);
})

let ville = document.querySelector(`#ville`);
ville.addEventListener(`click`, function geolocation() {
navigator.geolocation.getCurrentPosition(coordonnees);
});

function coordonnees(pos) {
let crd = pos.coords;
let latitude = crd.latitude;
let longitude = crd.longitude;
let winSize = 'width=500, height=500';

document.querySelector('#ville').textContent = 'Latitude : ' + latitude.toFixed(2);
document.querySelector('#ville').textContent = 'Longitude : ' + longitude.toFixed(6);
document.querySelector('#ville').textContent = window.open(`https://www.google.co.in/maps/@${latitude},${longitude},15z`);
}
