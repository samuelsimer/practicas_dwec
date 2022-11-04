let html = "";
for(let i = 0; i <= 30; i++){
    html += `<span class='number'>${i}</span>`;
}
document.getElementById("numbers").innerHTML = html;