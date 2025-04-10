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
const modalC = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");
const fotos = ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"]

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
    modal.style.animation = "aparecer 1s forwards";
});
document.querySelector(".close-m").addEventListener("click", () => {
    modal.style.animation = "desaparecer 0.3s forwards";
    setTimeout(() => {
        modalC.style.display = "none";
    }, 300)
});
document.querySelectorAll(".img-selector")[0].classList.add("active")
