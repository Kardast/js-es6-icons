
// For each cycle
const cats = [

    {name: "Jerry", color: "Gray"},
    {name: "Felix", color: "Black and white"},
    {name: "Garfield", color: "Orange"},

];

cats.forEach((element, index) => {
    console.log(`
        ${element.name}'s color is ${element.color} ${index}
    `);

});


// Map cycle (crea una copia o comunque un nuovo array con valori uguali o diversi se li cambi)
const numeri = [1,2,3,4,5];

const quadrati = numeri.map((mioNUmero) =>mioNUmero * mioNUmero);

console.log(quadrati);

// Filter cycle
const numeri2 = [1,2,3,4,5];
const pari = numeri2.filter((numero) => {
    if (numero % 2 === 0) {
        return true;
    }
    return false;
})
console.log(pari);

// con il for
/*
const pari = []:
for (let i = 0; i < numeri2.length; i++) {
    let numero = numeri2[i];
    if (numero % 2 === 0) {
        return true;
    }
    return false;
    
}
*/

// alternativa uguale ma più corta
const pari2 = numeri2.filter((numero) => numero % 2 === 0);
console.log(pari2);

// JSnack - 1 
// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.


let automobili = [
    {
        "marca" : "Auto1",
        "modello" : "1",
        "alimentazione" : "benzina"
    },
    {
        "marca" : "Auto2",
        "modello" : "2",
        "alimentazione" : "benzina"
    },
    {
        "marca" : "Auto3",
        "modello" : "3",
        "alimentazione" : "benzina"
    },
    {
        "marca" : "Auto4",
        "modello" : "4",
        "alimentazione" : "diesel"
    },
    {
        "marca" : "Auto5",
        "modello" : "5",
        "alimentazione" : "diesel"
    },
    {
        "marca" : "Auto6",
        "modello" : "6",
        "alimentazione" : "diesel"
    },
    {
        "marca" : "Auto7",
        "modello" : "7",
        "alimentazione" : "gpl"
    },
    {
        "marca" : "Auto8",
        "modello" : "8",
        "alimentazione" : "gpl"
    },
    {
        "marca" : "Auto9",
        "modello" : "9",
        "alimentazione" : "elettrico"
    },
    {
        "marca" : "Auto10",
        "modello" : "10",
        "alimentazione" : "elettrico"
    },

];


const arrBenzina = automobili.filter((numero) => {
    if (numero.alimentazione === "benzina") {
        return true;
    }
    return false;
})
console.log(arrBenzina);

const arrDiesel = automobili.filter((numero) => {
    if (numero.alimentazione === "diesel") {
        return true;
    }
    return false;
})
console.log(arrDiesel);

const arrGpl = automobili.filter((numero) => {
    if (numero.alimentazione === "gpl") {
        return true;
    }
    return false;
})
console.log(arrGpl);


// jSnack - 2
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

let printPage = document.querySelector("header");
console.log(print);

const myWeirdArr = ["pippo", "PLUTO", "Paperino"];
console.log(myWeirdArr);

const myNormalArr = myWeirdArr.map((names) => names.charAt(0).toUpperCase() + names.slice(1).toLocaleLowerCase());
console.log(myNormalArr);

printPage.innerHTML += myNormalArr;

// alternativa
const myNormalArr2 = myWeirdArr.map((names)=> {
    // versione minuscola della parola iesima
    let minuscola = names.toLowerCase();
    console.log(minuscola);
    // estraiamo la prima lettera e la trasformiamo in maiuscola
    let iniziale = minuscola[0].toUpperCase();
    console.log(iniziale);
    // creo la parola facendo la concatenazione delle due precedenti
    let finale = iniziale + minuscola.slice(1);
    console.log(finale);
    return finale;
});
console.log(myNormalArr2);

