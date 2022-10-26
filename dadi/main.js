"use strict";
//DADI

//Genera un numero tra 1 e 6 (facce del dado) per l'utente
const userNumber = Math.floor(Math.random() * 6) + 1;
//Genera un numero tra 1 e 6 (facce del dado) per la cpu
const cpuNumber = Math.floor(Math.random() * 6) + 1;

console.log(userNumber, cpuNumber)

//SE il numero del dado dell'utente è > di quello della cpu vince l'utente
if (userNumber > cpuNumber) {
    console.log("User ha vinto")
} else if (userNumber < cpuNumber) {
    console.log("la cpu ha vinto")
} else {
        console.log("pareggio") 
}