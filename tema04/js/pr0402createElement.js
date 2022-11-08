let meses = 'Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre'.split(',');
let elementos = document.querySelector("#months");
for(let i = 1; i <= meses.length; i++){
    let elemento = document.createElement('div');
    elemento.classList = 'month';
    let numero = document.createElement('div');
    numero.classList = 'month-number';
    numero.textContent = i;
    let mes = document.createElement('div');
    mes.classList = 'month-name';
    mes.textContent = meses[i-1];
    elemento.append(numero);
    elemento.append(mes);
    elementos.append(elemento);
}