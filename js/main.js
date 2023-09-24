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

let botones = document.getElementsByClassName('compra');//coleccion de nodos
    for (const boton of botones) {
        //opcion 1 - addEventListener
        boton.addEventListener('click', () => {
            console.log('Hiciste click en el boton cuyo id es ' + boton.id);
            const prodACarro = listaProds.find((producto) => producto.id == boton.id);
            console.log(prodACarro);
            //cargar producto encontrado al carro
            agregarAlCarrito(prodACarro);
        });

        //opcion 2
        boton.onmouseover = () => boton.classList.replace('btn-primary', 'btn-warning');
        boton.onmouseout = () => boton.classList.replace('btn-warning', 'btn-primary');
    }


cristalesCards(productos);