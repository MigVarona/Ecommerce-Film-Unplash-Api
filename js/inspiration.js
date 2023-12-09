const accessKey = '44Yh3j04VI0h73noLdqOWPkEjsTRqP17zwhwsVNc7W4';
const apiUrl = 'https://api.unsplash.com/photos/random';
const photoContainer = document.getElementById('photo-container');
const categorySelect = document.getElementById('category');
let currentPage = 1;

function loadRandomPhotos() {
    const category = categorySelect.value;
    const numberOfPhotos = 3;

    const url = `${apiUrl}?client_id=${accessKey}&query=${category}&count=${numberOfPhotos}&page=${currentPage}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const photosHtml = data.map(photo => {
                const artistName = photo.user.name;
                return `
                    <div class="col-md-4 mb-4">
                        <img src="${photo.urls.regular}" alt="Unsplash Photo" class="img-fluid">
                        <p>Artist: ${artistName}</p>
                    </div>`;
            }).join('');

            photoContainer.innerHTML = photosHtml;
        })
        .catch(error => {
            console.error('Error al cargar las fotos:', error);
            photoContainer.innerHTML = 'Error al cargar las fotos.';
        });
}

function loadNextPage() {
    currentPage++;
    loadRandomPhotos();
}

// Trigger the function when the page loads or when the category is changed
loadRandomPhotos();
categorySelect.addEventListener('change', () => {
    currentPage = 1; // Reset page when category changes
    loadRandomPhotos();
});

// Implementación básica de botón para cargar la siguiente página
const loadMoreButton = document.getElementById('load-more-button');
loadMoreButton.addEventListener('click', loadNextPage);
