document.getElementById("buscar").addEventListener('click', buscarClima);

function buscarClima(){
    let url1 = `https://api.openweathermap.org/data/2.5/weather?lat=42.6000300&lon=-5.5703200&appid=${document.getElementById('APIKey').value}&lang=sp, es`;
    fetchWeather(url1);
}

function fetchWeather(url) {
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((json)=>{
        console.log(json.weather[0].description);
        //Crear tabla
        let tabla = document.querySelector('table');
        tabla.innerHTML = '';
        tabla.innerHTML += `
                <tr>    
                    <th>Clima</td>
                </tr>
            `;
        //Introducir clima
        tabla.innerHTML += `
            <tr>    
                <td>${json.weather[0].description}</td>
            </tr>
        `;
    })
    .catch((error)=>{console.log(error);});
}

