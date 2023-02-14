let url1 = 'https://swapi.dev/api/planets/';
fetchPlanets(url1);

//Funcion generar tabla planetas
function fetchPlanets(url){

    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((json)=>{
        //Crear tabla
        let tabla = document.createElement('table');
        json.results.forEach((item) => {
            
            //Introducir planeta
            tabla.innerHTML += `
                <tr>    
                    <td>Nombre: ${item.name}</td>
                    <td>Diametro: ${item.diameter}</td>
                    <td>Nombre: ${item.climate}</td>
                    <td>Terreno: ${item.terrain}</td>
                </tr>
            `;

        });
        document.querySelector('body').appendChild(tabla);
    })
    .catch((error)=>{console.log(error);});

}

