document.addEventListener("DOMContentLoaded", function () {
    const accessKey = '44Yh3j04VI0h73noLdqOWPkEjsTRqP17zwhwsVNc7W4';
    
    function addImage(photo, cardIndex) {
        const card = document.getElementsByClassName('card')[cardIndex];

   

        const imgElement = document.createElement("img");
        const desiredWidth = 350;
        const calculatedHeight = (desiredWidth / photo.width) * photo.height;

        imgElement.src = `${photo.urls.regular}&w=${desiredWidth}&h=${calculatedHeight}`;
        imgElement.alt = photo.alt_description;

        imgElement.addEventListener('error', (event) => {
            console.error(`Error al cargar la imagen: ${event.target.src}`);
        });

        const cardBody = card.querySelector('.card-body');

        if (!cardBody) {
            console.error('No se encontró el elemento con la clase "card-body" en el índice:', cardIndex);
            return;
        }

        cardBody.insertBefore(imgElement, cardBody.firstChild);
    }

    // Obtener fotos aleatorias de tu colección de Unsplash
    fetch('https://api.unsplash.com/collections/RPfaQ1JJOeM/photos?client_id=' + accessKey + '&order_by=')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error HTTP! Estado: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        data.forEach((photo, index) => {
            addImage(photo, index);
        });
    })
    .catch(error => {
        console.error('Error al obtener fotos de la colección:', error);
    });
});

// Segunda función para agregar fotos en las tarjetas de film.

document.addEventListener("DOMContentLoaded", function () {
    const accessKey = '44Yh3j04VI0h73noLdqOWPkEjsTRqP17zwhwsVNc7W4';
    
    function addImage(photo, cardIndex) {
        const card = document.getElementsByClassName('film')[cardIndex];

   

        const imgElement = document.createElement("img");
        const desiredWidth = 350;
        const calculatedHeight = (desiredWidth / photo.width) * photo.height;

        imgElement.src = `${photo.urls.regular}&w=${desiredWidth}&h=${calculatedHeight}`;
        imgElement.alt = photo.alt_description;

        imgElement.addEventListener('error', (event) => {
            console.error(`Error al cargar la imagen: ${event.target.src}`);
        });

        const cardBody = card.querySelector('.card-body');

        if (!cardBody) {
            console.error('No se encontró el elemento con la clase "card-body" en el índice:', cardIndex);
            return;
        }

        cardBody.insertBefore(imgElement, cardBody.firstChild);
    }

    // Obtener fotos aleatorias de tu colección de Unsplash
    fetch('https://api.unsplash.com/collections/nErL9-XsjU8/photos?client_id=' + accessKey + '&order_by=')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error HTTP! Estado: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        data.forEach((photo, index) => {
            addImage(photo, index);
        });
    })
    .catch(error => {
        console.error('Error al obtener fotos de la colección:', error);
    });
});
