const cardsProductos = document.getElementById("cristales");

function cristalesCards(lista) {
    for (const prod of lista) {
        cardsProductos.innerHTML += `
            <div class="card" style="width: 30rem;>
                <img src="${prod.foto}" class="card-img-top" alt="${prod.nombre}"/>
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">
                    ${prod.descripcion} ${prod.precio}
                    </p>
                    <button type=${prod.id} class="btn btn-info">Comprar</button>
                </div>
            </div>
        `;
    }
}



cristalesCards(productos);