// - Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanto l’altro.


// Creiamo due Array con elementi differenti e uno dei due ha meno contenuto del primo
const primoArray = [4,5,7,10,22,48,68]
const secondoArray = [2,3,9,11]

// Aggiungiamo elementi in modo casuale al secondo Array.

for (let i = secondoArray.length; i < primoArray.length; i++) {
    const firstOne = primoArray[i]
    const random = Math.floor(Math.random() * 10) +1
    secondoArray.push (random)
}

// Stamp
console.log(primoArray)
console.log(secondoArray)