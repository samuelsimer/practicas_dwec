document.getElementById("btn").addEventListener("click", function(){
    let colores = new Array(Math.random() * 255,Math.random() * 255,Math.random() * 255);
    document.body.style = `background-color: rgb(${colores[0]},${colores[1]},${colores[2]})`;
});