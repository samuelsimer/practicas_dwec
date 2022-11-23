// La estructura del carrito será:
// { id: XX, name: XXXX, price: XXX, amount: XX }
let carrito = [];

renderPage();

// Renderiza la página, esta función se llamará al ejecutar el script
// y después de cada vez que se cambie la página
function renderPage() {
    let productNodes = products.map( createProductNode );


    let productSection = document.getElementById('products-section');
    productSection.innerHTML = '';
    productSection.append(...productNodes);

    //Añadimos los listener a los botones
    let buttons = document.querySelectorAll('.btn-add-product');
    buttons.forEach( (btn) => {
        console.log("Añadiendo listener")
        btn.addEventListener( 'click', addToCart );
    } )
}

// Recoge los datos del producto y devuelve un nodo HTML con la estructura del producto
function createProductNode( {id, product, price, image} ) {
    // Creamos el div base del producto
    let divProduct = document.createElement('div');
    divProduct.classList.add('product');
    
    // Añadimos la foto
    let img = document.createElement('img');
    img.setAttribute('src', image);
    img.classList.add('product-photo');
    divProduct.append(img);
    
    // Añadimos el texto inferior
    let data = document.createElement('div');
    data.classList.add('product-data');
    data.innerHTML = `
        <div class="fruit-name">${ product }</div>
        <div class="price-btn">
            <div class="price">${ (price/100).toFixed(2) } €/Kg</div>
            <div class="btn btn-add-product" data-id="${id}">Añadir</div>
        </div>
    `;
    divProduct.append(data);

    return divProduct;
}

// Handler del botón Añadir. Recoge el identificador del producto a partir del 
// atributo data-id del botón que ha disparado el evento
function addToCart( e ) {
    let productId = e.target.getAttribute('data-id');
    let product = products.find( (item) => item.id == productId );
    // Averiguamos si el producto ya está en el carrito
    let productIndex = carrito.findIndex( (item) => item.id == productId );

    if ( productIndex != -1 ) {
        carrito[productIndex ].amount +=1;
    } else {
        carrito.push({
            ...product,
            amount: 1
        })
    }
    
    renderCarrito();
}

// Renderiza el carrito. Cada vez que se añade un producto dibuja completamente el carrito
// a partir del contenido de la variable carrito
function renderCarrito() {
    let divCarritoContent = document.getElementById('carrito-content');

    // Se construye el carrito a partir de la variable carrito
    let compra =  carrito.map( ( {amount, product, price} ) => {
        let carritoRow = document.createElement('div');
        carritoRow.classList.add('carrito-row');
        carritoRow.innerHTML = `<span class="amount-column">${amount}</span><span class="product-column">${product}</span><span class="price-column">${(price*amount/100).toFixed(2)} €</span>`;
        return carritoRow;
    } );

    divCarritoContent.replaceChildren(...compra)

    // Añadimos el total
    let divCarritoTotal = document.getElementById('carrito-total');
    let total = carrito.reduce( (acum, {amount, price}) => acum + (price*amount), 0 );
    divCarritoTotal.innerHTML = `
        <span class="total-column">TOTAL</span><span class="total">${ (total/100).toFixed(2) } €</span>
    `;
}