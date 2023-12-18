// film.js

// Función para cargar datos de manera asíncrona
async function fetchData() {
  const response = await fetch('../js/viva.json');
  const dataResponse = await response.json();
  return dataResponse;
}

// Función para crear tarjetas y modales
function createCardsAndModals(data) {
  data.forEach((card, index) => {
    if (index >= 12 && index <= 17) {
      createCard(card, index);
      createModal(card, index);
    }
  });

  // Agrega un evento de clic a cada tarjeta después de crear los elementos
  $('.card').on('click', function () {
    const modalID = $(this).data('bs-target');
    $(modalID).modal('show');
  });
}

// Función para crear una tarjeta de Bootstrap
function createCard(card, index) {
  const cardHTML = `
    <div class="col-md-4 card-container">
      <div class="card" data-bs-toggle="modal" data-bs-target="#modal${index + 1}">
        <img src="${card.imagen}" class="card-img-top" alt="Imagen de la película">
        <div class="card-body">
          <h5 class="card-title">${card.titulo}</h5>
          <p class="card-text">${card.contenido}</p>
          <button class="btn btn-primary" onclick="addToCart(${index})">Add to Cart</button>
        </div>
      </div>
    </div>
  `;

  $('.row').append(cardHTML);
}

// Función para crear un modal dinámicamente
function createModal(card, index) {
  const modalHTML = `
    <div class="modal fade" id="modal${index + 1}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${card.titulo}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="carouselExampleIndicators${index + 1}" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                ${card.imagenes.map((imagen, i) => `
                  <div class="carousel-item ${i === 0 ? 'active' : ''}">
                    <img src="${imagen}" class="d-block w-100" alt="Imagen de la película">
                  </div>
                `).join('')}
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${index + 1}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${index + 1}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <p>${card.contenido}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  $('body').append(modalHTML);
}

// Función para manejar la adición al carrito
function addToCart(index) {
  const selectedItem = data[index];
  localStorage.setItem('selectedItem', JSON.stringify(selectedItem));
  window.location.href = 'checkout.html';
}

// Exporta las funciones para que estén disponibles en el archivo de prueba
module.exports = { fetchData, createCardsAndModals, addToCart };

