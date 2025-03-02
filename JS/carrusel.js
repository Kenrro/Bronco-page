
const imagenes = document.querySelectorAll(".contenedor-imagenes img");
let indiceActual = 0;
let intervalo;

function cambiarImagen(nuevoIndice){
    imagenes[indiceActual].classList.remove("img-activa");
    imagenes[indiceActual].classList.add("img-inactiva");

    indiceActual = (nuevoIndice+imagenes.length)%imagenes.length;
    imagenes[indiceActual].classList.add("img-activa");
    imagenes[indiceActual].classList.remove("img-inactiva");
}
function SIGUIENTEiMAGEN(){
    cambiarImagen(indiceActual+1);
}
function iniciarCarrusel(){
    intervalo = setInterval(SIGUIENTEiMAGEN, 5000);

}
iniciarCarrusel();