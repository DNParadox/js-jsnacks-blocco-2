// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.



// Ciclo for
// let sum = 0;
// for ( let i = 0; i < 5; i++) {
//     const numbers = parseInt (prompt ('Dimmi un numero')) 
//     sum += numbers;
// }


// Ciclo while

let sum = 0;
i = 0;
while (  i < 5 ) {
    const numbers = parseInt (prompt ('Dimmi un numero'))
    sum += numbers;

    i++
}



// while(teamsArray.length < 3) {
//     const userTeam = prompt('Dimmi una squadra');

//     // Pusho solo se la stringa che mi da l'utente non è vuota!
//     if(userTeam.length > 0) {
//         teamsArray.push(userTeam);
//     }

//     console.log(teamsArray);
// }

console.log(sum)