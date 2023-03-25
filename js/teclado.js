"use strict";

import { palabra, arrayGuioneBajos, imprimirGuiones } from "./main.js";

import { mostrarPuntuaciones, esconderPaneles } from "./panels.js";

let letra;
const tecladoSection = document.querySelector("section.teclado");
let botonLetra;
let idx;
let usuarioHaGanado = false;

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
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function crearTeclas() {
  for (let i = 0; i < arrayLetras.length; i++) {
    botonLetra = document.createElement("button");
    botonLetra.textContent = arrayLetras[i];
    tecladoSection.append(botonLetra);
    botonLetra.addEventListener("click", (event) => {
      letra = event.target.textContent;
      imprimirTecla();
      ganarJuego();
    });
  }
}

function imprimirTecla() {
  for (let elem = 0; elem < palabra.length; elem++) {
    idx = palabra.indexOf(letra, elem);
    arrayGuioneBajos[idx] = letra;
    imprimirGuiones();
  }
}

function ganarJuego() {
  const arrayGuionesToString = arrayGuioneBajos.toString();
  const palabraToStirng = palabra.toString();
  console.log(palabraToStirng);
  console.log(arrayGuionesToString);
  if (palabraToStirng === arrayGuionesToString) {
    usuarioHaGanado = true;
    esconderPaneles();
    mostrarPuntuaciones();
  }
}

crearTeclas();

export { usuarioHaGanado };
