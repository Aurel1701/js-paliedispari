
const sceltaUser = prompt('pari o dispari')
let numero = parseInt(prompt('inseriesci un numero'))
while (numero >= 5 || numero <= 1) {
     numero = parseInt(prompt('inseriesci un numero'))
     
     
}
console.log(`il risultato dell'utente è : ${numero}`);

function computer() {
  let random = Math.floor(Math.random()*5)+ 1

  return random
    
}
console.log(`il numero del computer è : ${computer()}`);

let somma = numero + computer()

function risultato(somma) {
     if ((somma % 2 == 0) && (sceltaUser == 'pari')) {

         console.log('vince user');
         
     } else if ((somma % 2 !== 0) && (sceltaUser == 'dispari')) {

        console.log('vince user');
         
     } else {
          console.log('vince computer');
     }

    
}

risultato(somma)