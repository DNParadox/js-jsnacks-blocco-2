// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.


// Creiamo un array vuoto
const userNumbersArray = [];
console.log(userNumbersArray)

// Chiediamo un numero all'utente

let sum = 0;


while(sum < 50) {

    const userNumbers = parseInt( prompt( 'Dimmi un numero'))

    sum += userNumbersArray

    userNumbersArray.push(userNumbers);
}

console.log(userNumbersArray)


