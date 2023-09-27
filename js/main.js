const carrito = [];
const cardsProductos = document.getElementById("cristales");

function cristalesCards(lista) {
    for (const prod of lista) {
        cardsProductos.innerHTML += `
            <div class="card border border-success border-3 border-opacity-50" style="width: 18rem;" >
                <img src= ${prod.foto} class="card-img-top rounded mx-auto d-block img-fluid" alt="${prod.nombre}"/>
                <div class="card-body">
                    <h5 class="card-title fs-5 fw-bolder">${prod.nombre}</h5>
                    <p class="card-text">
                    ${prod.descripcion} 
                    </p><p class="card-text fs-5 fw-semibold">$${prod.precio} </p>
                    <button type=${prod.id} class=" compra btn btn-info bi bi-cart2 fw-semibold"> Comprar</button>
                </div>
            </div>
        `;
    } 
}

cristalesCards(productos);

