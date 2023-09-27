const carrito = [];
const cardsProductos = document.getElementById("cristales");

function cristalesCards(lista) {
    for (const prod of lista) {
        cardsProductos.innerHTML += `
            <div class="card border-info mb-3" style="max-width: 30rem;>
                <img src="${prod.foto} class="card-img-top rounded mx-auto d-block img-fluid" alt="${prod.nombre}"/>
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">
                    ${prod.descripcion} 
                    </p><p class="card-text">$${prod.precio} </p>
                    <button type=${prod.id} class="btn btn-info bi bi-cart2"> Comprar</button>
                </div>
            </div>
        `;
    }
}


cristalesCards(productos);

