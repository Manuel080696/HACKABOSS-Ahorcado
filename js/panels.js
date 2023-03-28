"use strict";

import { arrayPalabras, escribirPalabraAleatroria } from "./main.js";

import { usuarioHaGanado, reseteoIntentos } from "./teclado.js";

import { crearLi } from "./usuario.js";

const jugar = document.querySelector(".jugar");
const juego = document.querySelector(".juego");
const puntuaciones = document.querySelector(".puntuacionesTabla");
const tituloPuntiaciones = document.querySelector("h2");
const botonSalir = document.querySelector("button#salir");
const jugarBoton = jugar.querySelector("button.jugar");

function mostrarPanel(panel) {
  panel.classList.remove("hidden");
}

function esconderPaneles() {
  jugar.classList.add("hidden");
  juego.classList.add("hidden");
  puntuaciones.classList.add("hidden");
}

function mostrarPuntuaciones() {
  mostrarPanel(puntuaciones);
  crearLi();
  const botonPuntuaciones = document.querySelector("button.botonPuntuaciones");
  if (usuarioHaGanado === true) {
    tituloPuntiaciones.textContent = "¡ Has Ganado !";
  } else {
    tituloPuntiaciones.textContent = "¡ Has Perdido !";
  }
  botonPuntuaciones.addEventListener("click", () => {
    esconderPaneles();
    principal();
  });
}

function mostrarJuego() {
  mostrarPanel(juego);
  escribirPalabraAleatroria(arrayPalabras);
  botonSalir.addEventListener("click", () => {
    esconderPaneles();
    mostrarPuntuaciones();
  });
}

function principal() {
  mostrarPanel(jugar);
  reseteoIntentos();
  jugarBoton.addEventListener("click", () => {
    esconderPaneles();
    mostrarJuego();
  });
}

principal();

export { mostrarPuntuaciones, esconderPaneles, usuarioHaGanado, jugarBoton };
