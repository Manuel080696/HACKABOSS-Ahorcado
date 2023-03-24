"use strict";

const jugar = document.querySelector(".jugar");
const juego = document.querySelector(".juego");
const puntuaciones = document.querySelector(".puntuaciones");
let tituloPrincipal = document.querySelector("h1");
let usuarioHaPerdido = false;

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
  if (usuarioHaPerdido === true) {
    puntuaciones.style.backgroundColor = "red";
    tituloPrincipal.textContent = "Has Perdido";
  } else {
    puntuaciones.style.backgroundColor = "green";
    tituloPrincipal.textContent = "Has Ganado";
  }
  botonPuntuaciones.addEventListener("click", () => {
    esconderPaneles();
    principal();
  });
}

function mostrarJuego() {
  mostrarPanel(juego);
  tituloPrincipal.classList.add("hidden");
  const botonSalir = document.querySelector("button#salir");
  botonSalir.addEventListener("click", () => {
    usuarioHaPerdido = true;
    esconderPaneles();
    mostrarPuntuaciones();
  });
}

function principal() {
  mostrarPanel(jugar);
  tituloPrincipal.classList.remove("hidden");
  const jugarBoton = jugar.querySelector("button.jugar");
  tituloPrincipal.textContent = "Juego Ahorcado";
  jugarBoton.addEventListener("click", () => {
    esconderPaneles();
    mostrarJuego();
  });
}

principal();
