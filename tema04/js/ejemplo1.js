//let lista = document.getElementById("lista");
let lista = document.getElementsByTagName('li');
Array.from(lista).forEach((item)=>{
    item.textContent = "nuevo texto";
});