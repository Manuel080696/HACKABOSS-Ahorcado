"use strict";

const arrayPalabras = ["JAVA SCRIPT", "DOM", "PIZZA DE PIÑA", "HTML", "HOLA"];
const parrafoPalabra = document.querySelector("p.palabra");

function escribirPalabraAleatroria(elemnto) {
  const numeroRandom = Math.floor(Math.random() * elemnto.length);
  /* console.log(numeroRandom); */

  let palabra = elemnto[numeroRandom];
  palabra = [...palabra];
  console.log(palabra);

  for (const element of palabra) {
    /* if (element !== " ") {
      const i = (parrafoPalabra.textContent = "_");
    } else {
      parrafoPalabra.textContent = " ";
    } */
    parrafoPalabra.textContent = "_";
  }
}

escribirPalabraAleatroria(arrayPalabras);
