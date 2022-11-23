document.querySelector('#add-button').addEventListener('click', añadir);

function añadir(){
    let li = document.createElement('li');
    li.textContent = document.querySelector('#input-text').value;
    document.querySelector('#input-text').value = "";

    document.querySelector('ul').append(li);
}