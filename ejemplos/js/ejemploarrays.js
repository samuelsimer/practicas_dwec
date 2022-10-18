let arr = [
    {nombre: "Juan", curso: 2, ciclo: "DAW"},
    {nombre: "Juan", curso: 1, ciclo: "SMR"},
    {nombre: "Juan", curso: 2, ciclo: "SMR"},
    {nombre: "Juan", curso: 1, ciclo: "ASIR"},
];

let result = arr.filter(item => item.curso == 2 && item.ciclo == "SMR");
console.log(result);