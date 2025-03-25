document.addEventListener("DOMContentLoaded", function() {
    // Cambia la URL del background del body con un timestamp único
    document.body.style.backgroundImage = `url("https://picsum.photos/1920/1089?random=${Date.now()}")`;
  });
  