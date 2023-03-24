"use strict";

const arrayPalabras = ["JAVA SCRIPT", "DOM", "PIZZA DE PIÑA", "HTML", "HOLA"];
const parrafoPalabra = document.querySelector("p.palabra");
const arrayGuioneBajos = [];
let palabra;

function escribirPalabraAleatroria(elemnto) {
  const numeroRandom = Math.floor(Math.random() * elemnto.length);
  /* console.log(numeroRandom); */

  palabra = elemnto[numeroRandom];
  palabra = [...palabra];

  console.log(palabra);
  for (const element of palabra) {
    if (element !== " ") {
      arrayGuioneBajos.push("_");
    } else {
      arrayGuioneBajos.push("ㅤ");
    }
  }

  parrafoPalabra.textContent = arrayGuioneBajos.join(" ");
  comprobarPalabra();

  console.log(arrayGuioneBajos);
}

function comprobarPalabra() {}

escribirPalabraAleatroria(arrayPalabras);

export { parrafoPalabra, palabra, arrayGuioneBajos };
