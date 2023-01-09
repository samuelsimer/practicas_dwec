function fecha(){
   if(!document.getElementById("fecha").value.match(/([0-2][0-9]|3[0-1])\/(0[1-9]|1[1-2])\/[0-9]{4}/g)){
        alert("Fecha incorrecta, el formato es: dd/mm/aaaa")
   }
}

function telefono(){
    if(!document.getElementById("telefono").value.match(/\(\+[0-9]{2}\)\s?\d{3}\s?\d{3}\s?\d{3}/g)){
         alert("telefono incorrecto, el formato es: (+xx) xxx xxxxxx")
    }
 }

 function email(){
    if(!document.getElementById("email").value.match(/[\w\-]+@[\w\.]+\.[a-z]+/g)){
         alert("email incorrecto, el formato es: a@a.a")
    }
 }
 function color(){
    if(!document.getElementById("color").value.match(/\#[A-Fa-f0-9]{6}/g)){
         alert("color incorrecto, el formato es: #XXXXXX")
    }
 }

 function IP(){
    if(!document.getElementById("IP").value.match(/[1-2]?[0-9]?[0-9]\.[1-2]?[0-9]?[0-9]\.[1-2]?[0-9]?[0-9]/g)){
         alert("IP incorrecta, el formato es: 255.255.255.255 o 1.1.1.1")
    }
 }

 function url(){
    console.log(document.getElementById("url").value.match(/https:\/\/[\w\.]+/g));
    if(!document.getElementById("url").value.match(/https:\/\/[\w\.]+/g)){
         alert("url incorrecta, el formato es: https://XXX.XXXXXX.XXX")
    }
 }

 function contraseña(){
     if(!document.getElementById("contraseña").value.match(/[\w\s\d]{8}/g)){
          alert("contraseña incorrecta, deben ser al menos 8 caracteres")
     }
     if(!document.getElementById("contraseña").value.match(/[A-Z]/g)){
          alert("contraseña incorrecta, tiene que tener al menos una mayúscula")
     }
     if(!document.getElementById("contraseña").value.match(/[a-z]/g)){
          alert("contraseña incorrecta, tiene que tener al menos una minúscula")
     }
     if(!document.getElementById("contraseña").value.match(/[0-9]/g)){
          alert("contraseña incorrecta, tiene que tener al menos un número")
     }
  }

  function nif(){
     if(!document.getElementById("nif").value.match(/[0-9]{8}[A-Z]/g)){
          alert("nif incorrecto, el formato es: 00000000X ")
     }
  }

  function matrícula(){
     if(!document.getElementById("matrícula").value.match(/[0-9]{4}[A-Z]{3}/g)){
          alert("matrícula incorrecta, el formato es: 0000XXX ")
     }
  }

document.getElementById("fecha").addEventListener("blur", fecha);
document.getElementById("telefono").addEventListener("blur", telefono);
document.getElementById("email").addEventListener("blur", email);
document.getElementById("color").addEventListener("blur", color);
document.getElementById("IP").addEventListener("blur", IP);
document.getElementById("url").addEventListener("blur", url);
document.getElementById("contraseña").addEventListener("blur", contraseña);
document.getElementById("nif").addEventListener("blur", nif);
document.getElementById("matrícula").addEventListener("blur", matrícula);