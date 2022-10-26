"use strict";
//MAIL

//chiedi all'utente la sua email
const email = prompt("Inserisci la tua email");

const emailList = ["fabio.forenza@hotmail.it", "batman@gmail.it", "Joker@libero.it", "duefacce@hotmail.com"];

let found = false;

for (let i = 0; i < emailList.length ; i++) {
    if (email === emailList[i]) {
        found = true;
    }
};

if ( found ) {
    alert("Accesso consentito!")
} else {
    alert("Accesso negato!")
};