
let form = document.forms[0];
let correo = form.elements.correo;
let contraseña = form.elements.contraseña;
let repetirContraseña = form.elements.repetirContraseña;
let medidorContraseña = [
    {'texto' : 'muy débil', 'color' : 'purple'},
    {'texto' : 'débil', 'color' : 'red'},
    {'texto' : 'aceptable', 'color' : 'orange'},
    {'texto' : 'fuerte', 'color' : 'yellow'},
    {'texto' : 'muy segura', 'color' : 'green'}
];

correo.addEventListener('blur', validarMail);
contraseña.addEventListener('blur', validarContraseña);
repetirContraseña.addEventListener('blur', validarContraseñarepetida);

let minusculas = 'qwertyuiopasdfghjklñzxcvbnm'.split('');
let mayusculas = 'QWERTYUIOPASDFGHJKLÑZXCVBNM'.split('');
let numeros = '1234567890'.split('');
let simbolos = '*.,#@€&%/()!+-_'.split('');


function validarMail(){
    if(!correo.value.includes('@') && !correo.value.includes('.')){
        alert('El correo no es válido, ha de contener un @ y un .');
        correo.value = "";
    }
}

function validarContraseña(){
    let contraseñaDividida = contraseña.value.split('');
    if(contraseña.value != ''){

        //INICIALIZADO A -5 PARA IGUALAR LA SEGURIDAD A LA LONGITUD DEL ARRAY
        let seguridadContraseña = -5;

        //FORMA MAS CORTA
        /*let numMinusculas;
        let numMayusculas;
        let numDigits;
        let numSimbols;

        contraseñaDividida.forEach((item) => {
            numMinusculas += minusculas.includes(item) ? 1 : 0;
            numMayusculas += mayusculas.includes(item) ? 1 : 0;
            numDigits += numeros.includes(item) ? 1 : 0;
            numSimbols += contraseñaDividida.length - (numMinusculas + numMayuculas + numDigits);
        });

        seguridadContraseña += numMinusculas > 0 ? 1 : 0;
        seguridadContraseña += numMayusculas > 0 ? 1 : 0;
        seguridadContraseña += numDigits > 0 ? 1 : 0;
        seguridadContraseña += numSimbols > 0 ? 1 : 0;*/

        //FORMA ORIGIAL
        console.log(contraseñaDividida.filter((item) => minusculas.includes(item)).length);
        if(contraseñaDividida.filter((item) => minusculas.includes(item)).length){
            seguridadContraseña++;
        } 
    
        if(contraseñaDividida.filter((item) => mayusculas.includes(item)).length){
            seguridadContraseña++;
        } 
    
        if(contraseñaDividida.filter((item) => numeros.includes(item)).length){
            seguridadContraseña++;
        } 
    
        if(contraseñaDividida.filter((item) => simbolos.includes(item)).length){
            seguridadContraseña++;
        } 


        seguridadContraseña += Math.floor(contraseñaDividida.length/3) < 5 ? Math.floor(contraseñaDividida.length/3) : 5;;    
    
        //EN CASO DE QUE NO CUMPLA REQUISITOS PARA LLEGAR A 0, IGUALO A 0 PARA ESCOGER MINIMA SEGURIDAD
        if(seguridadContraseña < 0){
            seguridadContraseña = 0;
        }

        let medidor = document.querySelector('#seguridadContraseña');
    
        medidor.style.backgroundColor= medidorContraseña[seguridadContraseña].color;
    
        medidor.textContent = medidorContraseña[seguridadContraseña].texto;
    }else{
        let medidor = document.querySelector('#seguridadContraseña');
    
        medidor.style.backgroundColor= medidorContraseña[0].color;
    
        medidor.textContent = medidorContraseña[0].texto;
    }    
}

function validarContraseñarepetida(){
    if(contraseña.value != repetirContraseña.value && repetirContraseña.value != "" ){
        alert('Las contraseñas no son iguales, vuelva a escribir la contraseña');
        repetirContraseña.value = "";
    }
}