"use strict";

import { jugarBoton } from "./panels.js";

import { contadorScore, liScoreElement } from "./teclado.js";

const localstorageState = window.localStorage.getItem("stateAhorcado");

const State = {
  usuario: localstorageState ? JSON.parse(localstorageState).usuario : [],
};

const SaveState = () => {
  const jsonState = JSON.stringify(State);
  window.localStorage.setItem("stateAhorcado", jsonState);
};

const formElement = document.forms.formLogin;
const olElement = document.querySelector("ol");
const inputUserElement = document.querySelector("input");
const botonLapizElement = document.querySelector("button.usuario");
let booleanoCreaUsuario = false;
let newUser;
let parrafoSaludo;
const nuevoUsuario = formElement.elements.newUsuario;
let liElement;
let buscoUsuario;

const addUser = (usuario) => {
  const nombreUsuario = {
    name: usuario,
    score: 0,
  };

  buscoUsuario = State.usuario.findIndex((user) => {
    return user.name === nombreUsuario.name;
  });

  if (buscoUsuario !== -1) {
    contadorScore.score = State.usuario[buscoUsuario].score;
    console.log(contadorScore.score);
    liScoreElement.textContent = contadorScore.score;
  } else {
    State.usuario.push(nombreUsuario);
    SaveState();
    contadorScore.score = 0;
    console.log(contadorScore);
    liScoreElement.textContent = contadorScore.score;
  }
};

function blockSpaces(event) {
  if ((event.key === " ") | (event.which === 32) || event.code === "Space") {
    event.preventDefaut();
  }
}

const handleNuevoUsuario = (evento) => {
  evento.preventDefault();
  console.log(newUser);
  if (
    nuevoUsuario.value !== undefined &&
    nuevoUsuario.value !== "" &&
    nuevoUsuario.value !== newUser
  ) {
    newUser = nuevoUsuario.value.trim();
    addUser(newUser);
    formularioSaludoUsuario();
    jugarBoton.removeAttribute("disabled");
    booleanoCreaUsuario = true;
  }
};
botonLapizElement.addEventListener("click", () => {
  if (
    nuevoUsuario.value === newUser &&
    inputUserElement.hasAttribute("required") &&
    nuevoUsuario.value !== ""
  ) {
    newUser = "";
    nuevoUsuario.value = newUser;
    inputUserElement.removeAttribute("hidden");
    parrafoSaludo.toggleAttribute("hidden");
    parrafoSaludo.remove();
    formElement.style.flexDirection = "row";
    botonLapizElement.style.marginLeft = "0";
    inputUserElement.hasAttribute("required");
    jugarBoton.toggleAttribute("disabled");
  }
});

formElement.addEventListener("submit", handleNuevoUsuario);

function crearLi() {
  const indexUsuario = State.usuario.findIndex((user) => {
    return user.name === newUser;
  });
  console.log(indexUsuario);
  State.usuario[indexUsuario].score = contadorScore.score;
  SaveState();
  const fragmentLi = document.createDocumentFragment();
  for (const element of State.usuario) {
    liElement = document.createElement("li");
    fragmentLi.append(liElement);
    liElement.textContent = `${element.name}: ${element.score}`;
  }

  olElement.innerHTML = "";
  olElement.append(fragmentLi);
}

function formularioSaludoUsuario() {
  if (newUser !== nuevoUsuario) {
    inputUserElement.toggleAttribute("hidden");
    formElement.style.flexDirection = "row-reverse";
    botonLapizElement.style.marginLeft = "1rem";
    parrafoSaludo = document.createElement("p");
    parrafoSaludo.setAttribute("class", "parrafoSaludo");
    parrafoSaludo.textContent = `¡Bienvenido!: ${newUser}`;
    formElement.append(parrafoSaludo);
  } else {
    parrafoSaludo.textContent = "";
  }
}

export default State;
export { crearLi, addUser, buscoUsuario };
