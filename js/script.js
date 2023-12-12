$(document).ready(function() {
    // Utiliza fetch para cargar el JSON de manera asíncrona
    fetch('contenido.json')
      .then(response => response.json())
      .then(data => {
        // Itera sobre los elementos del JSON
        data.forEach((card, index) => {
          // Crea una tarjeta de Bootstrap para cada elemento del JSON
          var cardHTML = `
            <div class="col-md-4 card-container">
              <div class="card" data-toggle="modal" data-target="#modal${index + 1}">
                <img src="${card.imagen}" class="card-img-top" alt="Imagen de la película">
                <div class="card-body">
                  <h5 class="card-title">${card.titulo}</h5>
                  <p class="card-text">${card.contenido}</p>
                </div>
              </div>
            </div>
          `;
  
          // Agrega la tarjeta al contenedor
          $('.row').append(cardHTML);
  
          // Crea el modal dinámicamente
          var modalHTML = `
            <div class="modal fade" id="modal${index + 1}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${card.titulo}</h5>
                  </div>
                  <div class="modal-body">
                    <div id="carouselExampleIndicators${index + 1}" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner">
                        <!-- Itera sobre las imágenes del carrusel -->
                        ${card.imagenes.map((imagen, i) => `
                          <div class="carousel-item ${i === 0 ? 'active' : ''}">
                            <img src="${imagen}" class="d-block w-100" alt="Imagen de la película">
                          </div>
                        `).join('')}
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleIndicators${index + 1}" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleIndicators${index + 1}" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                    <p>${card.contenido}</p>
                  </div>
                </div>
              </div>
            </div>
          `;
  
          // Agrega el modal al cuerpo del documento
          $('body').append(modalHTML);
        });
  
        // Después de crear todos los elementos, agrega un evento de clic a cada tarjeta
        $('.card').on('click', function() {
          // Obtén el ID del modal correspondiente
          var modalID = $(this).data('target');
  
          // Muestra el modal correspondiente
          $(modalID).modal('show');
        });
      })
      .catch(error => console.error('Error al cargar el JSON:', error));
  });
  