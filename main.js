/* 
Lavoriamo con i moduli commonjs esportando e importando valori e funzioni.
Segui questi tre step creando i rispettivi files:
1 - names.js
Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.   //FATTO

2 - hobbies.js
Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.
Esporta la funzione dal file.   //FATTO

3 - people.js*
Importa la tua funzione da names.js     //FATTO
Importa la tua funzione da hobbies.js   //FATTO
Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies.
All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
*/

//1 - names.js
const names = require("./names")
/* console.log(names); */

//2 - hobbies.js
const hobbies = require("./hobbies")
/* console.log(hobbies); */

function my_function(){
    objects = {
        names,
        hobbies
    }
    return objects
}

console.log(my_function);




