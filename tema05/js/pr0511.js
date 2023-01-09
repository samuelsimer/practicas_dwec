//CAMBIAR FORMATO DE LA FECHA
function fecha(){
     let mes = {
          '01': 'enero',
          '02': 'febrero',
          '03': 'marzo',
          '04': 'abril',
          '05': 'mayo',
          '06': 'junio',
          '07': 'julio',
          '08': 'agosto',
          '09': 'septiembre',
          10: 'octubre',
          11: 'noviembre',
          12: 'diciembre',
     };
     //RECOGER TEXTO CON FORMATO DE FECHAS CAMBIADO
     let texto = document.getElementById("fechas").value
          .replace(/([0-2][0-9]|3[0-1])\/(0[1-9]|1[1-2])\/([0-9]{4})/g, 
               function(match, p1, p2, p3){
                    return p1 + " de " + mes[p2] + " de " + p3;
               });
          
     //REESCRIBIR EL TEXTAREA
     document.getElementById("fechas").value = texto;
     
}

document.getElementById("reemplazar").addEventListener('click', fecha);