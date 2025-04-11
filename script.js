const buttonMenu = document.querySelector(".icono-del-menu");
let menuAbierto = false;
buttonMenu.addEventListener("click", () => {
    if (!menuAbierto) {
        document.getElementById("menu").style.marginTop = "44px";
        menuAbierto = true;
    } else {
        document.getElementById("menu").style.marginTop = "-80%";
        menuAbierto = false;
    }
})
const baner = document.querySelector(".dalto-banner");
const modalC = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");
const fotos = ["img-galeria/1.jpg", "img-galeria/2.jpg", "img-galeria/3.jpg","img-galeria/4.jpg","img-galeria/5.jpg","img-galeria/6.jpg","img-galeria/7.jpg"]

const createIMGSelector = img => {
    const selector = document.createElement("DIV");
    selector.setAttribute("data-img", img);
    selector.setAttribute("id", img)
    selector.classList.add("img-selector");
    selector.addEventListener("click", () => {
        inicializarSelectores();
        document.getElementById("foto").setAttribute("src", img);
        document.getElementById(img).classList.add("active");
    })
    return selector
}
const inicializarSelectores = () => {
    const fragment = document.createDocumentFragment();
    for (i = 0; i < fotos.length; i++) {
        let selector = createIMGSelector(fotos[i]);
        fragment.appendChild(selector);
    }
    document.querySelector(".img-selectors").innerHTML = "";
    document.querySelector(".img-selectors").appendChild(fragment);
}
inicializarSelectores();
document.querySelector(".open-modal").addEventListener("click", () => {
    modalC.style.display = "flex";
    baner.style.display = "none"
    modal.style.animation = "aparecer 1s forwards";
});
document.querySelector(".close-m").addEventListener("click", () => {
    modal.style.animation = "desaparecer 0.3s forwards";
    setTimeout(() => {
        modalC.style.display = "none";
        baner.style.display = "flex";
    })
});
const libro = ["Relatos_y_reflexiones"]
document.querySelectorAll(".img-selector")[0].classList.add("active")
/* $(document).ready(function(){
    $('#linkView').click(function(){
        var iframe = document.createElement("iframe");
        iframe.width = '100%';
        iframe.height = '700px';
        iframe.src = '"C:\Users\Usuario\Desktop\web_personal\Relatos_y_reflexiones.pdf"'; //Aqui iría el src de tu archivo .PDF
        $('.showPDF').append(iframe);
    });
 }); */