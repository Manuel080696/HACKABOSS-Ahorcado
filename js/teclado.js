"use strict";
//Import -----------------------------------------------------------
import {
  palabra,
  arrayGuioneBajos,
  imprimirGuiones,
  arrayPalabras,
} from "./main.js";

import { mostrarPuntuaciones, esconderPaneles } from "./panels.js";

import { crearLi } from "./usuario.js";
//Import -----------------------------------------------------------

let letra;
const tecladoSection = document.querySelector("section.teclado");
const liScoreElement = document.querySelector("li.score");
const liIntentosElement = document.querySelector("li.intentos");
let botonLetra;
let idx;
let usuarioHaGanado = false;

//Objeto contador, para poder modificar la score del jugador
let contadorScore = {
  score: 0,
};

let contadorIntentos = 6;

liScoreElement.textContent = contadorScore;
liIntentosElement.textContent = contadorIntentos;

//Array de letras para generar el teclado
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

//Función para crear las teclas del teclado
function crearTeclas() {
  const fragmentTeclado = document.createDocumentFragment();
  for (let i = 0; i < arrayLetras.length; i++) {
    botonLetra = document.createElement("button");
    botonLetra.textContent = arrayLetras[i];
    fragmentTeclado.append(botonLetra);
    botonLetra.addEventListener("click", (event) => {
      //Si la letra a la que hacemos click no está en la palabra secreta
      if (palabra.indexOf(event.target.textContent) === -1) {
        //Le quitamos una vida
        contadorIntentos -= 1;
        liIntentosElement.textContent = contadorIntentos;
        //La letra de la tecla se pone roja
        event.target.style.color = "red";
        //Desabilitamos el botón, por si le vuelve a hacer click no pierda más vidas
        event.target.toggleAttribute("disabled");
        //Cambiamos la imagen de Rodolfo(esqueleto)
        cambiarImagenPerdidaPuntos();
      } else {
        //La letra de la tecla se pone verde
        event.target.style.color = "green";
        //Desabilitamos el botón, por si le vuelve a hacer click no pierda más vidas
        event.target.toggleAttribute("disabled");
      }
      //Asiganmos el valor de la telca clickeada a la variable letra (es usada en la función imprimirTecla)
      letra = event.target.textContent;
      imprimirTecla();
      perderJuego();
      ganarJuego();
    });
  }
  //Reinicio del color de las teclas
  botonLetra.style.color = "white";
  tecladoSection.append(fragmentTeclado);
}

//Le asiganmos a el párrafo las coincidencias de letra con la palabraSecreta (palabra)
function imprimirTecla() {
  for (let elem = 0; elem < palabra.length; elem++) {
    idx = palabra.indexOf(letra, elem);
    arrayGuioneBajos[idx] = letra;
    imprimirGuiones();
  }
}

//Cuándo el usuario acierta la palabra
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
      //Reseteo del booleano
      usuarioHaGanado = false;
      reseteoDeImagenRodolfo();
      crearLi();
    }, 1500);
  }
}

//Cuándo el usuario pierde o le da a el botón salir
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
