/*function cambiarOrden(){
    let imagenes = document.querySelectorAll('img');
    imagenes.forEach((item)=>{
        //console.log(item.src);
        item.src = modificarNumeroImagen(item.src);
        //console.log(item.src);
    });
}

function modificarNumeroImagen(ruta){
    let numeroImagen = Number(ruta.slice(59, 60));
    console.log(ruta.substring(60, ruta.length));
    if(numeroImagen == 1){
        numeroImagen = 5;
    }else{
        numeroImagen--;
    }
    ruta = ruta.slice(0,59) + numeroImagen + ruta.slice(60, ruta.length);
    return ruta;
}*/

function ImagenAleatoria(){
    let contenedor = Array.from(document.getElementsByTagName('img'));
    contenedor.sort((a,b)=> Math.random() - 0.5);
    document.getElementsByTagName('div')[0].replaceChildren(...contenedor);
}

document.getElementById("btn").addEventListener("click", ImagenAleatoria);