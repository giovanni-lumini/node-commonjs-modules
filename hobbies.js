/* 2 - hobbies.js
Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.
Esporta la funzione dal file. */

function three_hobbies(hobbyOne, hobbyTwo, hobbyThree) {
    let my_hobbies = {
        hobbies:[hobbyOne, hobbyTwo, hobbyThree]
    }
    return my_hobbies
}

console.log(three_hobbies("calcio", "basket", "moto"));

module.exports = three_hobbies;