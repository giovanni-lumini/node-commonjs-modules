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
const names = require("./names");
const get_names = names ("giovanni", "lumini");
/* console.log(get_names); */

//2 - hobbies.js
const hobbies = require("./hobbies")
const get_hobbies = hobbies ("calcio", "pallavolo", "basket");
/* console.log(get_hobbies); */


function my_function(){
    const get_names = names ("giovanni", "lumini");
    const get_hobbies = hobbies ("calcio", "pallavolo", "basket");
    const objects = { ...get_names, ...get_hobbies };
    return objects
    }
const get_my_function = my_function();
console.log(get_my_function);




