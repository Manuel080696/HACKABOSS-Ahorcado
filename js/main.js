"use strict";

const arrayPalabras = ["JAVA SCRIPT", "DOM", "PIZZA DE PIÑA", "HTML", "HOLA"];
let parrafoPalabra = document.querySelector("p.palabra");
let arrayGuioneBajos = [];
let palabra;
let palabraOriginal;

function escribirPalabraAleatroria(elemento) {
  const numeroRandom = Math.floor(Math.random() * elemento.length);
  palabraOriginal = elemento[numeroRandom];
  console.log(palabraOriginal);
  palabra = [...palabraOriginal];

  for (const element of palabra) {
    if (element !== " ") {
      arrayGuioneBajos.push("_");
    } else {
      arrayGuioneBajos.push(" ");
    }
  }

  imprimirGuiones();
}

function imprimirGuiones() {
  parrafoPalabra.textContent = arrayGuioneBajos
    .toString()
    .replaceAll(" ", "‍‍‍‍‍ㅤ")
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
