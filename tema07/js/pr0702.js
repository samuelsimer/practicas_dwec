let url1 = 'https://swapi.dev/api/planets/';
//Crear tabla
let tabla = document.createElement('table');

fetchPlanets(url1);

//Funcion generar tabla planetas
function fetchPlanets(url){

    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((json)=>{
        
        json.results.forEach((item) => {
            
            //Introducir planeta en tabla
            tabla.innerHTML += `
                <tr>    
                    <td>Nombre: ${item.name}</td>
                    <td>Diametro: ${item.diameter}</td>
                    <td>Nombre: ${item.climate}</td>
                    <td>Terreno: ${item.terrain}</td>
                </tr>
            `;
        });

        //Volver a llamar al metodo
        if(json.next){
            fetchPlanets(json.next);
        }
        document.querySelector('body').appendChild(tabla);
        
    })
    .catch((error)=>{console.log(error);});
    console.log(url1);
}

