let meses = 'Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre'.split(',');
let elementos = document.querySelector("#months");
for(let i = 1; i <= meses.length; i++){
    let elemento = document.createElement('div');
    elemento.classList.add('month');
    let numero = document.createElement('div');
    numero.classList.add('month-number');
    numero.textContent = i;
    let mes = document.createElement('div');
    mes.classList.add('month-name');
    mes.textContent = meses[i-1];
    elemento.append(numero);
    elemento.append(mes);
    elementos.append(elemento);
}