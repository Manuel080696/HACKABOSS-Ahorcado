"use strict";

import { jugarBoton } from "./panels.js";

import { contadorScore } from "./teclado.js";

const inputUserElement = document.querySelector("input");
const botonLapizElement = document.querySelector("button.usuario");
const olElement = document.querySelector("ol");
let nombreUsuario = {
  name: "",
  score: 0,
};

// console.log(inputUserElement);
botonLapizElement.addEventListener("click", (event) => {
  nombreUsuario.name = inputUserElement.value;
  console.log(nombreUsuario);
  event.preventDefault();
  if (nombreUsuario.name !== "") {
    jugarBoton.removeAttribute("disabled");
  }
});

function crearLi() {
  const liElement = document.createElement("li");
  olElement.append(liElement);
  nombreUsuario.score = contadorScore;
  liElement.textContent = `${nombreUsuario.name}: ${nombreUsuario.score}`;
}

export { crearLi };
