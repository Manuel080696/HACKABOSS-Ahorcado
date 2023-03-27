"use strict";

const arrayPalabras = ["JAVA SCRIPT", "DOM", "PIZZA DE PIÑA", "HTML", "HOLA"];
let parrafoPalabra = document.querySelector("p.palabra");
let arrayGuioneBajos = [];
let palabra;
let palabraOriginal;
let numeroRandom;

function reseteoMain() {
  palabraOriginal = "";
  palabra = [];
  arrayGuioneBajos = [];
  parrafoPalabra.textContent = "";
  numeroRandom = 0;
}
function escribirPalabraAleatroria(elemento) {
  reseteoMain();
  numeroRandom = Math.floor(Math.random() * elemento.length);
  palabraOriginal = elemento[numeroRandom];
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

export {
  palabra,
  palabraOriginal,
  escribirPalabraAleatroria,
  arrayPalabras,
  imprimirGuiones,
  arrayGuioneBajos,
  parrafoPalabra,
};
