function getUnsecurePass(array){
    let letras = "qwertyuiopasdfghjklñzxcvbnm"
    let numeros = "1234567890";
    let inseguros =  array.filter(item => {
        let contrasena = item.pass;
        contrasena = contrasena.split("");
        if(!(contrasena.some(item => letras.includes(item))) ||
            !(contrasena.some(item => letras.toUpperCase().includes(item))) ||
            !(contrasena.some(item => numeros.includes(item)))){
                return item;
        }
    });
    return inseguros.map(item => item.nombre + " " + item.ape1 + " " + item.ape2);
}

let arr = [
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWEC: 9.4
        }
    },
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWEC: 9.4
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    }
    ]
    
    console.log(getUnsecurePass(arr));