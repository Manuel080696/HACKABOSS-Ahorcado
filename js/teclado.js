"use strict";

const tecladoSection = document.querySelector("section.teclado");
let botonLetra;
const arrayLetras = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function crearTeclas() {
  /* for (const elemnts of arrayLetras) {
    document.createElement("button");
  } */

  for (let i = 0; i < arrayLetras.length; i++) {
    botonLetra = document.createElement("button");
    botonLetra.textContent = arrayLetras[i];
    tecladoSection.append(botonLetra);
    botonLetra.addEventListener("click", () => {});
  }
}

crearTeclas();
