// Evento que se ejecuta cuando se ha cargado completamente el DOM
document.addEventListener("DOMContentLoaded", function () {
    // Clave de acceso para la API de Unsplash
    const accessKey = '44Yh3j04VI0h73noLdqOWPkEjsTRqP17zwhwsVNc7W4';

    // Función para agregar una imagen a una tarjeta
    function addImage(photo, cardIndex) {
        // Seleccionar la tarjeta según el índice proporcionado
        const card = document.getElementsByClassName('card')[cardIndex];

        // Crear un elemento de imagen
        const imgElement = document.createElement("img");

        // Calcular la altura proporcional basándose en el ancho deseado
        const desiredWidth = 350;
        const calculatedHeight = (desiredWidth / photo.width) * photo.height;

        // Establecer atributos de la imagen
        imgElement.src = `${photo.urls.regular}&w=${desiredWidth}&h=${calculatedHeight}`;
        imgElement.alt = photo.alt_description;

        // Manejar el evento de error de carga de la imagen
        imgElement.addEventListener('error', (event) => {
            console.error(`Error al cargar la imagen: ${event.target.src}`);
        });

        // Seleccionar el cuerpo de la tarjeta
        const cardBody = card.querySelector('.card-body');

        // Verificar si se encontró el elemento con la clase "card-body"
        if (!cardBody) {
            console.error('No se encontró el elemento con la clase "card-body" en el índice:', cardIndex);
            return;
        }

        // Insertar la imagen al principio del cuerpo de la tarjeta
        cardBody.insertBefore(imgElement, cardBody.firstChild);
    }

    // Obtener fotos aleatorias de la colección "RPfaQ1JJOeM" de Unsplash
    fetch('https://api.unsplash.com/collections/RPfaQ1JJOeM/photos?client_id=' + accessKey + '&order_by=')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP! Estado: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Iterar sobre las fotos y agregarlas a las tarjetas
            data.forEach((photo, index) => {
                addImage(photo, index);
            });
        })
        .catch(error => {
            console.error('Error al obtener fotos de la colección:', error);
        });
});

// Segundo evento para agregar fotos a las tarjetas de film
document.addEventListener("DOMContentLoaded", function () {
    // Clave de acceso para la API de Unsplash
    const accessKey = '44Yh3j04VI0h73noLdqOWPkEjsTRqP17zwhwsVNc7W4';

    // Función para agregar una imagen a una tarjeta de film
    function addImage(photo, cardIndex) {
        // Seleccionar la tarjeta de film según el índice proporcionado
        const card = document.getElementsByClassName('film')[cardIndex];

        // Crear un elemento de imagen
        const imgElement = document.createElement("img");

        // Calcular la altura proporcional basándose en el ancho deseado
        const desiredWidth = 350;
        const calculatedHeight = (desiredWidth / photo.width) * photo.height;

        // Establecer atributos de la imagen
        imgElement.src = `${photo.urls.regular}&w=${desiredWidth}&h=${calculatedHeight}`;
        imgElement.alt = photo.alt_description;

        // Manejar el evento de error de carga de la imagen
        imgElement.addEventListener('error', (event) => {
            console.error(`Error al cargar la imagen: ${event.target.src}`);
        });

        // Seleccionar el cuerpo de la tarjeta
        const cardBody = card.querySelector('.card-body');

        // Verificar si se encontró el elemento con la clase "card-body"
        if (!cardBody) {
            console.error('No se encontró el elemento con la clase "card-body" en el índice:', cardIndex);
            return;
        }

        // Insertar la imagen al principio del cuerpo de la tarjeta
        cardBody.insertBefore(imgElement, cardBody.firstChild);
    }

    // Obtener fotos aleatorias de la colección "nErL9-XsjU8" de Unsplash para las tarjetas de film
    fetch('https://api.unsplash.com/collections/nErL9-XsjU8/photos?client_id=' + accessKey + '&order_by=')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP! Estado: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Iterar sobre las fotos y agregarlas a las tarjetas de film
            data.forEach((photo, index) => {
                addImage(photo, index);
            });
        })
        .catch(error => {
            console.error('Error al obtener fotos de la colección:', error);
        });
});
