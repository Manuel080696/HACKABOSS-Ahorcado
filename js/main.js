"use strict";

const arrayPalabras = [
  "REACT",
  "DOM",
  "CSS",
  "HTML",
  "JAVA SCRIPT",
  "MEDIA QUERY",
];
const arrayPistas = [
  "Crea interfaces de usuario interactivas de forma sencilla.",
  "Objetos y elementos se relacionan entre sí en el navegador y en el documento",
  "El usuario define las reglas que especifican los estilos",
  "El componente más básico de la Web",
  "Lenguaje de programación ligero, interpretado, o compilado justo a tiempo",
  "deseas modificar tu página web o aplicación en función del tipo de dispositivo",
];

let parrafoPista = document.querySelector("p#parrafoPista");
let parrafoPalabra = document.querySelector("p.palabra");
const botonPistaElement = document.querySelector("button#pista");
const botonSonidoElement = document.querySelector("button#sonido");
let arrayGuioneBajos = [];
let palabra;
let palabraOriginal;
let pistaOriginal;

function reseteoMain() {
  palabraOriginal = "";
  palabra = [];
  arrayGuioneBajos = [];
  parrafoPalabra.textContent = "";
  parrafoPista.textContent = "";
}
function escribirPalabraAleatroria(elemento, elementoPista) {
  reseteoMain();
  const numeroRandom = Math.floor(Math.random() * elemento.length);
  palabraOriginal = elemento[numeroRandom];
  pistaOriginal = elementoPista[numeroRandom];
  palabra = [...palabraOriginal];
  console.log(palabraOriginal); //Preguntar Stefano funciones
  for (const element of palabra) {
    if (element !== " ") {
      arrayGuioneBajos.push("_");
    } else {
      arrayGuioneBajos.push(" ");
    }
    imprimirGuiones();
  }
}
function imprimirGuiones() {
  parrafoPalabra.textContent = arrayGuioneBajos
    .toString()
    .replaceAll(" ", "ㅤ")
    .replaceAll(",", " ");
}

// Botones-----------------------------------------------
botonPistaElement.addEventListener("click", () => {
  parrafoPista.textContent = "" + pistaOriginal;
});

// Sonido click para o no la música----------------------
const audioElement = document.querySelector("audio");
let boolSonido = false;
/* audioElement.play(); */

botonSonidoElement.addEventListener("click", () => {
  if (boolSonido === true) {
    audioElement.play();
    botonSonidoElement.style.backgroundImage =
      "url('multimedia/img/nuevoDiseno/botonVolumen-8.png')";
    boolSonido = false;
  } else {
    audioElement.pause();
    botonSonidoElement.style.backgroundImage =
      "url('multimedia/img/nuevoDiseno/BotonSinvolumen-8.png')";
    boolSonido = true;
  }
});

export {
  palabra,
  palabraOriginal,
  escribirPalabraAleatroria,
  arrayPalabras,
  imprimirGuiones,
  arrayGuioneBajos,
  parrafoPalabra,
  arrayPistas,
};
