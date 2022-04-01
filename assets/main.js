const parola = prompt('Inserisci una parola')
 
function palindromi(parola) {

    // trasformo la stringa in un array

    let arrayStringa = parola.split('')

    // facciamo l'array al contrario

    let contrario = arrayStringa.reverse()

    // trasformo array in stringa 

    let stringaContrario  = contrario.join('')
  

    if (parola == stringaContrario) {

    return true
        
    } else {
        return false

    }

    
}


if (palindromi(parola)) {

    console.log('la parola è : palindroma');
    
} else {
    console.log('Non è palindroma');
}