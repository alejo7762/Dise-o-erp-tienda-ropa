function mostrarAlerta() {
    alert("Aquí se mostrará el cronograma detallado del ERP.");
}

window.onload = function() {
    console.log("Página de documentación ERP cargada con paleta Beige y Café.");
};

window.onload = function() {
    const header = document.querySelector("header");
    const main = document.querySelector("main");

    let alturaHeader = header.offsetHeight;
    main.style.paddingTop = alturaHeader + "px";
};

window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
});

