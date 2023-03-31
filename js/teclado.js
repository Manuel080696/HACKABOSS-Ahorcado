"use strict";

import {
  palabra,
  arrayGuioneBajos,
  imprimirGuiones,
  arrayPalabras,
} from "./main.js";

import { mostrarPuntuaciones, esconderPaneles } from "./panels.js";

import State, { crearLi, buscoUsuario, addUser } from "./usuario.js";

let letra;
const tecladoSection = document.querySelector("section.teclado");
const liScoreElement = document.querySelector("li.score");
const liIntentosElement = document.querySelector("li.intentos");
let botonLetra;
let idx;
let usuarioHaGanado = false;
let contadorScore = {
  score: 0,
};
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
  const fragmentTeclado = document.createDocumentFragment();
  for (let i = 0; i < arrayLetras.length; i++) {
    botonLetra = document.createElement("button");
    botonLetra.textContent = arrayLetras[i];
    fragmentTeclado.append(botonLetra);
    botonLetra.addEventListener("click", (event) => {
      if (palabra.indexOf(event.target.textContent) === -1) {
        contadorIntentos -= 1;
        liIntentosElement.textContent = contadorIntentos;
        event.target.style.color = "red";
        event.target.toggleAttribute("disabled");
        cambiarImagenPerdidaPuntos();
      } else {
        event.target.style.color = "green";
        event.target.toggleAttribute("disabled");
      }
      letra = event.target.textContent;
      imprimirTecla();
      perderJuego();
      ganarJuego();
    });
  }
  botonLetra.style.color = "white";
  tecladoSection.append(fragmentTeclado);
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
    contadorScore.score += 100;
    liScoreElement.textContent = contadorScore.score;
    setTimeout(() => {
      esconderPaneles();
      mostrarPuntuaciones();
      usuarioHaGanado = false;
      reseteoDeImagenRodolfo();
      crearLi();
    }, 1500);
  }
}

function perderJuego() {
  if (contadorIntentos === 0) {
    setTimeout(() => {
      esconderPaneles();
      mostrarPuntuaciones();
      reseteoDeImagenRodolfo();
      crearLi();
    }, 1500);
  }
}

function reseteoIntentos() {
  contadorIntentos = 6;
  liIntentosElement.textContent = contadorIntentos;
  // En reseteo intentos reseteamos todo el intentos y las imagenes
  // de Rodolfo
  cambiarImagenPerdidaPuntos();
}

// Función de cambiar imagenes de Rodolfo el Esqueleto
let imgElement = document.querySelector("img#rodolfo");
let imgSRC = imgElement.getAttribute("src");
function cambiarImagenPerdidaPuntos() {
  switch (contadorIntentos) {
    case 6:
      imgSRC = "multimedia/img/vidasRodolfo/horcaVacia.png";
      imgElement.src = imgSRC;
      break;
    case 5:
      imgSRC = "multimedia/img/vidasRodolfo/rodolfoCabeza.png";
      imgElement.src = imgSRC;
      break;
    case 4:
      imgSRC = "multimedia/img/vidasRodolfo/rodolfoCuerpo.png";
      imgElement.src = imgSRC;
      break;
    case 3:
      imgSRC = "multimedia/img/vidasRodolfo/rodolfoUnBrazo.png";
      imgElement.src = imgSRC;
      break;
    case 2:
      imgSRC = "multimedia/img/vidasRodolfo/rodolfoDosBrazos.png";
      imgElement.src = imgSRC;
      break;
    case 1:
      imgSRC = "multimedia/img/vidasRodolfo/RodolfoUnaPierna.png";
      imgElement.src = imgSRC;
      break;
    case 0:
      imgSRC = "multimedia/img/vidasRodolfo/RodolfoAhorcado.png";
      imgElement.src = imgSRC;
      break;
  }
}

function reseteoDeImagenRodolfo() {
  imgElement.src = "multimedia/img/vidasRodolfo/horcaVacia.png";
  imgElement.src = imgSRC;
}

crearTeclas();

// Export------------------------------------------------
export {
  usuarioHaGanado,
  reseteoIntentos,
  contadorScore,
  liScoreElement,
  crearTeclas,
  tecladoSection,
};
