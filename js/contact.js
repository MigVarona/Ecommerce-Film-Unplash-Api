function validateForm() {
    var email = document.getElementById("exampleFormControlInput1").value;
    var name = document.getElementById("exampleFormControlInput2").value;
    var comments = document.getElementById("exampleFormControlTextarea1").value;

    // Validar el formato del correo electrónico con una expresión regular simple
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Por favor, introduce una dirección de correo electrónico válida.");
        return;
    }

    // Puedes agregar más validaciones según tus requisitos

    // Si todas las validaciones pasan, puedes enviar el formulario
    document.getElementById("contactForm").submit();
}