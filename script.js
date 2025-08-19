function mostrarAlerta() {
    alert("Aquí se mostrará el cronograma detallado del ERP.");
}

window.onload = function() {
    console.log("Página de documentación ERP cargada con paleta Beige y Café.");
};

window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
});

