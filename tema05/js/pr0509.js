//VARIABLES GLOBALES
let fondo = document.getElementById('fondo');

listeners();

//AÑADIENDO TODOS LOS LISTENERS
function listeners(){
    document.getElementById('bLogin').addEventListener('click', ventanaModal);
    document.getElementById('login').addEventListener('click', login);
    document.getElementById('register').addEventListener('click', register);
    document.getElementById('enviar').addEventListener('click', comprobaciones);
}

//QUITAR DISPLAY NONE DE LA VENTANA MODAL
function ventanaModal(){
    fondo.style.display = 'initial';
    document.getElementById('modal').style.display = 'initial';
}

//LOGIN YA GENERADO, SI CAMBIA DESDE REGISTRO SE BORRA NOMBRE DE USUARIO 
function login(){
    document.getElementById('cNombre').innerHTML = "";
}

//GENERAR EL INPUT Y LABER DE NOMBRE DE USUARIO
function register(){
    document.getElementById('cNombre').innerHTML = `<label for="nombre">Password</label><br>
    <input type="text" name="nombre" id="nombre">`;
}

//COMPROBACIONES FORMULARIO
function comprobaciones(){
    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');
    let errores = document.getElementById('errores');

    console.log(nombre);

    errores.innerHTML = nombre ? nombre.value == "" ? `<p>Nombre vacío</p><br>` : "" : "";
    errores.innerHTML += email.value == "" ? `<p>Email vacío</p><br>` : "";
    errores.innerHTML += pass.value == "" ? `<p>Contraseña vacía</p><br>` : "";

    if(!email.value.includes(`@`) || !email.value.includes(`.`)){
        errores.innerHTML += `<p>Email no válido</p>`;
    }
    errores.innerHTML += pass.value.length < 8 ? `<p>Contraseña tiene menos de 8 caracteres</p><br>` : "";

    let tipoOperacion = document.getElementById('cNombre').innerHTML == "" ? "Login" : "Register";
    console.log(tipoOperacion);
    console.log(email.value);
    console.log(pass.value);
}