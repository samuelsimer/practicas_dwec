let url1 = 'https://swapi.dev/api/planets/';
fetchPlanets(url1);

document.getElementById("previa").addEventListener('click', cambiarPagina);
document.getElementById("siguiente").addEventListener('click', cambiarPagina);

//Cambiar de pagina
function cambiarPagina(e) {
    fetchPlanets(e.target.dataset.url);
}

//Funcion generar tabla planetas
function fetchPlanets(url){

    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((json)=>{
        //Crear tabla
        let tabla = document.querySelector('table');
        tabla.innerHTML = '';
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

        let botonPrevia = document.getElementById('previa');
        botonPrevia.dataset.url = json.previous;
        let botonSiguiente = document.getElementById('siguiente');
        botonSiguiente.dataset.url = json.next;
    })
    .catch((error)=>{console.log(error);});

}

