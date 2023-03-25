"use strict";

import {
  arrayPalabras,
  escribirPalabraAleatroria,
  parrafoPalabra,
} from "./main.js";
import { usuarioHaGanado } from "./teclado.js";

const jugar = document.querySelector(".jugar");
const juego = document.querySelector(".juego");
const puntuaciones = document.querySelector(".puntuacionesTabla");
let tituloPrincipal = document.querySelector("h1");
const bodyElemento = document.querySelector("body");

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
  tituloPrincipal.classList.remove("hidden");
  const botonPuntuaciones = document.querySelector("button.botonPuntuaciones");
  if (usuarioHaGanado === true) {
    bodyElemento.style.background = "green";
    tituloPrincipal.textContent = "Has Ganado";
  } else {
    bodyElemento.style.background = "red";
    tituloPrincipal.textContent = "Has Perdido";
  }
  botonPuntuaciones.addEventListener("click", () => {
    esconderPaneles();
    principal();
  });
}

function mostrarJuego() {
  mostrarPanel(juego);
  escribirPalabraAleatroria(arrayPalabras);
  tituloPrincipal.classList.add("hidden");
  const botonSalir = document.querySelector("button#salir");
  botonSalir.addEventListener("click", () => {
    usuarioHaGanado = true;
    esconderPaneles();
    mostrarPuntuaciones();
  });
}

function principal() {
  mostrarPanel(jugar);
  bodyElemento.style.background = `linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  )`;
  tituloPrincipal.classList.remove("hidden");
  const jugarBoton = jugar.querySelector("button.jugar");
  tituloPrincipal.textContent = "Juego Ahorcado";
  jugarBoton.addEventListener("click", () => {
    esconderPaneles();
    mostrarJuego();
  });
}

principal();

export { mostrarPuntuaciones, esconderPaneles };
