// Clave de acceso para la API de Unsplash
const accessKey = '44Yh3j04VI0h73noLdqOWPkEjsTRqP17zwhwsVNc7W4';

// URL de la API de Unsplash para fotos aleatorias
const apiUrl = 'https://api.unsplash.com/photos/random';

// Contenedor HTML donde se mostrarán las fotos
const photoContainer = document.getElementById('photo-container');

// Selector de categoría HTML
const categorySelect = document.getElementById('category');

// Número de página actual
let currentPage = 1;

// Función para cargar fotos aleatorias desde Unsplash
function loadRandomPhotos() {
    // Obtener la categoría seleccionada y el número de fotos a cargar
    const category = categorySelect.value;
    const numberOfPhotos = 3;

    // Construir la URL de la API con los parámetros necesarios
    const url = `${apiUrl}?client_id=${accessKey}&query=${category}&count=${numberOfPhotos}&page=${currentPage}`;

    // Realizar la solicitud fetch a la API de Unsplash
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Crear HTML para cada foto recibida y mostrarlo en el contenedor
            const photosHtml = data.map(photo => {
                const artistName = photo.user.name;
                const artistWeb = photo.user.links.html;
                const photoSize = `${photo.width} x ${photo.height}`;
                const downloadLink = photo.links.download;

                return `
                    <div class="col-md-4 mb-4">
                        <img src="${photo.urls.regular}" alt="Unsplash Photo" class="img-fluid">
                        <p>Artist: <a href="${artistWeb}" target="_blank">${artistName}</a></p>
                        <p>Size: ${photoSize}</p>
                        <p><a href="${downloadLink}" target="_blank">Download High-Res</a></p>
                    </div>`;
            }).join('');

            photoContainer.innerHTML = photosHtml;
        })
        .catch(error => {
            // Manejar errores en la carga de fotos
            console.error('Error al cargar las fotos:', error);
            photoContainer.innerHTML = 'Error al cargar las fotos.';
        });
}

// Función para cargar la siguiente página de fotos
function loadNextPage() {
    currentPage++;
    loadRandomPhotos();
}

// Llamar a la función al cargar la página o al cambiar la categoría
loadRandomPhotos();
categorySelect.addEventListener('change', () => {
    currentPage = 1;
    loadRandomPhotos();
});

// Implementación básica de un botón para cargar la siguiente página
const loadMoreButton = document.getElementById('load-more-button');
loadMoreButton.addEventListener('click', loadNextPage);
