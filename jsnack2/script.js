//Crea 10 oggetti che rappresentano una zucchina.
var zucchine = [
    {
        varieta: "varietà alfa",
        peso: 4,
        lunghezza: 18
    },
    {
        varieta: "varietà beta",
        peso: 5,
        lunghezza: 8
    },
    {
        varieta: "varietà gamma",
        peso: 4,
        lunghezza: 19
    },
    {
        varieta: "varietà delta",
        peso: 2,
        lunghezza: 8
    },
    {
        varieta: "varietà epsilon",
        peso: 4,
        lunghezza: 13
    },
    {
        varieta: "varietà zeta",
        peso: 4,
        lunghezza: 12
    },
    {
        varieta: "varietà eta",
        peso: 7,
        lunghezza: 15
    },
    {
        varieta: "varietà theta",
        peso: 2,
        lunghezza: 3
    },
    {
        varieta: "varietà kappa",
        peso: 7,
        lunghezza: 6
    },
    {
        varieta: "varietà lambda",
        peso: 2,
        lunghezza: 17
    },
];


var lunghezzaMinore = 0;
var lunghezzaMaggiore = 0;
var gruppoLight = [];
var gruppoFat = [];

for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15) {
      lunghezzaMinore += zucchine[i].peso;
      gruppoLight.push(zucchine[i]);
    }
    else {
      lunghezzaMaggiore += zucchine[i].peso;
      gruppoFat.push(zucchine[i]);
    }
  };


//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
console.log('le zucchine < 15cm sono: ', gruppoLight);
console.log('le zucchine > 15cm ', gruppoFat);


//infine stampa separatamente quanto pesano i due gruppi di zucchine
console.log('Il peso complessivo delle zucchine con una lunghezza maggiore a 15 cm è: ' + lunghezzaMaggiore);
console.log("Il peso complessivo delle zucchine con una lunghezza inferiore a 15 cm è: " + lunghezzaMinore) ;





