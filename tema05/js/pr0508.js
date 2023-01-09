//VARIABLES GLOBALES
let ca;
let provincia;
let localidad;

renderComunidadAutonoma();
//GENERAR PAIS
function renderComunidadAutonoma(){
  let selectCA = document.getElementById("ca");
  let cas = Object.keys(localidadesData);
  cas.forEach((item)=>{
    let caActual = document.createElement("option");
    caActual.textContent = item;
    caActual.value = item;
    selectCA.appendChild(caActual);
  })

  selectCA.addEventListener('change', renderProvincias);
  document.getElementById("provincia").addEventListener('change', renderLocalidades);
}

//GENERAR PROVINCIAS
function renderProvincias(caSeleccionada){
  ca = caSeleccionada.target.value;
  let selectProvincia = document.getElementById("provincia");
  selectProvincia.removeAttribute("disabled");

  document.getElementById("localidad").setAttribute("disabled", true);
  document.getElementById("localidad").innerHTML ="";
  
  let provincias = Object.keys(localidadesData[ca]);
  provincias.forEach((item)=>{
    let provinciaActual = document.createElement("option");
    provinciaActual.textContent = item;
    provinciaActual.value = item;
    selectProvincia.appendChild(provinciaActual);
    
  })
}

//GENERAR LOCALIDADES
function renderLocalidades(provinciaSeleccionada){
  provincia = provinciaSeleccionada.target.value;
  let selectLocalidad = document.getElementById("localidad");
  selectLocalidad.removeAttribute("disabled");
  let localidades = localidadesData[ca][provincia];
  localidades.forEach((item)=>{
    let localidadActual = document.createElement("option");
    localidadActual.textContent = item;
    localidadActual.value = item;
    selectLocalidad.appendChild(localidadActual);
  })
}

