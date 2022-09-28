let anoNacimiento = Number(prompt("Indica tu año de nacimiento: "));

if(anoNacimiento >= 1949){
    if(anoNacimiento >= 1969){
        if(anoNacimiento >= 1981){
            if(anoNacimiento >= 1994){
                if(anoNacimiento > 2010){
                    alert("TU AÑO DE NACIMIENTO ES POSTERIOR A CUALQUIER GENERACION!!");
                }else{
                    alert("ERES DE LA GENERACION Z!!");
                }

            }else{
                alert("ERES DE LA GENERACION MILLENIAL!!");
            }

        }else{
            alert("ERES DE LA GENERACION X!!");
        }

    }else{
        alert("ERES DE LA GENERACION BABY BOOMER!!");
    }

}else{
    alert("TU AÑO DE NACIMIENTO ES ANTERIOR A CUALQUIER GENERACION!!");
}