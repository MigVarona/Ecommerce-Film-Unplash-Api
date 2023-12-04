const accessKey = '44Yh3j04VI0h73noLdqOWPkEjsTRqP17zwhwsVNc7W4';
const apiUrl = 'https://api.unsplash.com/photos/random';
const photoContainer = document.getElementById('photo-container');
const categorySelect = document.getElementById('category');

function loadRandomPhotos() {
    const category = categorySelect.value;
    const numberOfPhotos = 3;

    const url = `${apiUrl}?client_id=${accessKey}&query=${category}&count=${numberOfPhotos}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const photosHtml = data.map(photo => {
                // Extract artist's name from the user object
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

// Trigger the function when the page loads or when the category is changed
loadRandomPhotos();
categorySelect.addEventListener('change', loadRandomPhotos);
