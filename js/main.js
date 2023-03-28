"use strict";

const arrayPalabras = ["JAVA SCRIPT", "DOM", "PIZZA DE PIÑA", "HTML", "HOLA"];
let parrafoPalabra = document.querySelector("p.palabra");
let arrayGuioneBajos = [];
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
      arrayGuioneBajos.push(" ");
    }
    imprimirGuiones();
  }

  parrafoPalabra.textContent = arrayGuioneBajos.join(" ");
  comprobarPalabra();

  console.log(arrayGuioneBajos);
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
