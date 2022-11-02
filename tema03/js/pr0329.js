function getAverages(array){
    return array.map((item) => {
        let notas = item['notas'];
        let media = 0;
        for ( let key in notas ){
            media += notas[key];
        }
        media = media / 3;
        return {alumno: `${item.nombre} ${item.ape1} ${item.ape2}`,
            expediente: item.expediente,
            nota_media: media}
    });
        
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
    
    console.log(getAverages(arr));