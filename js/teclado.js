"use strict";

import {
  palabra,
  arrayGuioneBajos,
  imprimirGuiones,
  arrayPalabras,
} from "./main.js";

import { mostrarPuntuaciones, esconderPaneles } from "./panels.js";

import { crearLi } from "./usuario.js";

let letra;
const tecladoSection = document.querySelector("section.teclado");
const liScoreElement = document.querySelector("li.score");
const liIntentosElement = document.querySelector("li.intentos");
let botonLetra;
let idx;
let usuarioHaGanado = false;
let contadorScore = 0;
let contadorIntentos = 6;

liScoreElement.textContent = contadorScore;
liIntentosElement.textContent = contadorIntentos;

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
      if (palabra.indexOf(event.target.textContent) === -1) {
        contadorIntentos -= 1;
        liIntentosElement.textContent = contadorIntentos;
      }
      letra = event.target.textContent;
      imprimirTecla();
      perderJuego();
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
  if (palabraToStirng === arrayGuionesToString) {
    usuarioHaGanado = true;
    contadorScore += 100;
    liScoreElement.textContent = contadorScore;
    esconderPaneles();
    mostrarPuntuaciones();
    usuarioHaGanado = false;
  }
}

function perderJuego() {
  if (contadorIntentos === 0) {
    esconderPaneles();
    mostrarPuntuaciones();
  }
}

function reseteoIntentos() {
  contadorIntentos = 6;
  liIntentosElement.textContent = contadorIntentos;
}

crearTeclas();

export { usuarioHaGanado, reseteoIntentos, contadorScore };
