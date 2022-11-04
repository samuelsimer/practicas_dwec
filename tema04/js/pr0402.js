let html = "";
let meses = 'Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre';
meses = meses.split(',');
for(let i = 0; i <= meses.length; i++){
    html += `<div class='month'>
    <div class='month-number'>${i}</div>
    <div class='month-name'>${meses[i-1]}</div>
    </div>`;
}
document.getElementById("months").innerHTML = html;