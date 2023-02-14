document.getElementById("buscar").addEventListener('click', buscarClima);

//Evento generar URL API de clima con parametros API Key y ciudad
function buscarClima(){
    let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('ciudad').value}&lang=sp&appid=${document.getElementById('APIKey').value}`;
    fetchWeather(url1);    
}

//Obtener y mostrar información del clima
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
                    <th>Icono</td>
                    <th>Temperatura <img src="../imgs/temperatura.png" alt="icono temperatura"></td>
                    <th>Humedad <img src="../imgs/humedad.png" alt="icono humedad"></td>
                    <th>Lluvia última hora <img src="../imgs/lluvia.png" alt="icono lluvia"></td>
                    <th>Nieve última hora <img src="../imgs/nieve.png" alt="icono nieve"></td>
                </tr>
            `;
        //Introducir clima
        console.log(json);

        let nieve;
        if(json.snow){
            nieve = json.snow['1h'];
        }else{
            nieve = 'Sin nieve';
        }
        
        let lluvia;
        if(json.rain){
            lluvia = json.rain['1h'];
        }else{
            lluvia = 'Sin lluvia';
        } 
        tabla.innerHTML += `
            <tr>    
                <td>${json.weather[0].description}</td>
                <td><img src="https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png" alt="icono clima"></td>
                <td>${json.main.temp}</td>
                <td>${json.main.humidity}</td>
                <td>${lluvia}</td>
                <td>${nieve}</td>
            </tr>
        `;
    })
    .catch((error)=>{console.log(error);});
}

