"use strict";

//Import -----------------------------------------------------------
import {
  arrayPalabras,
  arrayPistas,
  escribirPalabraAleatroria,
} from "./main.js";

import {
  usuarioHaGanado,
  reseteoIntentos,
  crearTeclas,
  tecladoSection,
} from "./teclado.js";

import { crearLi } from "./usuario.js";
//Import -----------------------------------------------------------

//Seleccionamos los diferentes sections dónde aplicamos el cambio de paneles
const jugar = document.querySelector(".jugar");
const juego = document.querySelector(".juego");
const puntuaciones = document.querySelector(".puntuacionesTabla");
//
const tituloPuntiaciones = document.querySelector("h2");
//Botón de cruz del segundo panel (para que el usuario pueda salir del juego y pasar al panel de puntuaciones)
const botonSalir = document.querySelector("button#salir");
//Botón del primer panel (jugar/inicio)
const jugarBoton = jugar.querySelector("button.jugar");
//Botón del último panel (puntuaciones)
const botonPuntuaciones = document.querySelector("button.botonPuntuaciones");

//Función morastrar el panel nombrado
function mostrarPanel(panel) {
  panel.classList.remove("hidden");
}

//Función esconder los paneles
function esconderPaneles() {
  jugar.classList.add("hidden");
  juego.classList.add("hidden");
  puntuaciones.classList.add("hidden");
}

//Mostramos el panel puntuaciones y vemos mediante un booleano si el jugador ha ganado o perdido
function mostrarPuntuaciones() {
  mostrarPanel(puntuaciones);
  if (usuarioHaGanado === true) {
    tituloPuntiaciones.textContent = "¡ Has Ganado !";
  } else {
    tituloPuntiaciones.textContent = "¡ Has Perdido !";
  }
}

//El botón del último panel (puntuaciones), que al darle click nos llevará al panel principal
botonPuntuaciones.addEventListener("click", () => {
  esconderPaneles();
  principal();
});

//Mostramos el panel juego (el segundo panel)
function mostrarJuego() {
  mostrarPanel(juego);
  escribirPalabraAleatroria(arrayPalabras, arrayPistas);
}

//Este botón está situado en juego, sirve para salir al menú de puntuaciones directamente (el usuario pierde)
botonSalir.addEventListener("click", () => {
  //Esto es para reiniciar el teclado, y no lo duplique
  tecladoSection.innerHTML = "";
  //Para que cree los li del marcador de puntuaciones final
  crearLi();
  esconderPaneles();
  mostrarPuntuaciones();
});

//Mostramos el panel principal (el primer panel)
function principal() {
  mostrarPanel(jugar);
  reseteoIntentos();
}

//Este botón pertenece al primer panel (principal) y sirve para abrir el panel juego (segundo panel) en el que jugamos
jugarBoton.addEventListener("click", () => {
  //Esto es para reiniciar el teclado, y no lo duplique
  tecladoSection.innerHTML = "";
  esconderPaneles();
  mostrarJuego();
  crearTeclas();
});

//Para inicializar el bucle de paneles, por primera vez
principal();

//Export --------------------------------------------------------------------
export { mostrarPuntuaciones, esconderPaneles, usuarioHaGanado, jugarBoton };
