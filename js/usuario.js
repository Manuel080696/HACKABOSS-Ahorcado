"use strict";

//Import -----------------------------------------------------------
import { jugarBoton } from "./panels.js";

import { contadorScore, liScoreElement } from "./teclado.js";
//Import -----------------------------------------------------------

const localstorageState = window.localStorage.getItem("stateAhorcado");

const State = {
  usuario: localstorageState ? JSON.parse(localstorageState).usuario : [],
};

//Guardado en local de los datos del usuario (el objeto)
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

//Crea un objeto para cada nuevo usuario, con la score predefinida a 0 y el nombre de usuario es lo introducido en el input del inicio
const addUser = (usuario) => {
  const nombreUsuario = {
    name: usuario,
    score: 0,
  };
  //Le decimos que busque el nombre en el archivo local
  buscoUsuario = State.usuario.findIndex((user) => {
    return user.name === nombreUsuario.name;
  });

  //Si lo encuentra, le asigna el nuevo score en dicha posición de coincidencia (para no crear varios usuarios con el mismo nombre)
  if (buscoUsuario !== -1) {
    contadorScore.score = State.usuario[buscoUsuario].score;
    liScoreElement.textContent = contadorScore.score;
  } else {
    //Si no lo encuentra, crea un nuevo usuario
    State.usuario.push(nombreUsuario);
    SaveState();
    contadorScore.score = 0;
    liScoreElement.textContent = contadorScore.score;
  }
};

function blockSpaces(event) {
  if ((event.key === " ") | (event.which === 32) || event.code === "Space") {
    event.preventDefaut();
  }
}

//Evaluamos si el nombre de usuario es válido y si lo es, activamos el botón de jugar
const handleNuevoUsuario = (evento) => {
  evento.preventDefault();
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

//El botón lapiz del formulario, cumple la función de intercalar entre párrafo e input(introducir nombre)
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

//Crea los li de la tabla de puntuaciones del último panel (panel puntuaciones)
function crearLi() {
  const indexUsuario = State.usuario.findIndex((user) => {
    return user.name === newUser;
  });
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

//Función para mostrar el párrafo que dice !Bienvenido: ...¡ al poner un nombre de usuario y darle al botón del form (primer panel)
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

// Export------------------------------------------------
export default State;
export { crearLi, addUser, buscoUsuario };
