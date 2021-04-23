//Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
var zucchine = [
    {
        varieta: "varietà alfa",
        peso: 4,
        lunghezza: 7
    },
    {
        varieta: "varietà beta",
        peso: 5,
        lunghezza: 8
    },
    {
        varieta: "varietà gamma",
        peso: 4,
        lunghezza: 6
    },
    {
        varieta: "varietà delta",
        peso: 2,
        lunghezza: 8
    },
    {
        varieta: "varietà epsilon",
        peso: 4,
        lunghezza: 10
    },
    {
        varieta: "varietà zeta",
        peso: 4,
        lunghezza: 12
    },
    {
        varieta: "varietà eta",
        peso: 7,
        lunghezza: 9
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
        lunghezza: 5
    },
];

//Calcola quanto pesano tutte le zucchine
var somma = 0
for (var i= 0; i < zucchine.length; i++) {
    somma += zucchine[i].peso;
}
console.log("Il peso complessive delle 10 zucchine seelzionate è " + somma);

