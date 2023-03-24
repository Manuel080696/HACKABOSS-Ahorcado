"use strict";

import { parrafoPalabra, palabra, arrayGuioneBajos } from "./main.js";
let letra;
const tecladoSection = document.querySelector("section.teclado");
let botonLetra;
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
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function crearTeclas() {
  /* for (const elemnts of arrayLetras) {
    document.createElement("button");
  } */

  for (let i = 0; i < arrayLetras.length; i++) {
    botonLetra = document.createElement("button");
    botonLetra.textContent = arrayLetras[i];
    tecladoSection.append(botonLetra);
    botonLetra.addEventListener("click", (event) => {
      letra = event.target.textContent;

      console.log(letra);
      imprimirTecla();
    });
  }
}

function imprimirTecla() {
  for (let index = 0; index < palabra.length; index++) {
    /* if (letra === palabra[index]) {
      parrafoPalabra = [...parrafoPalabra];
      if (indexOf(parrafoPalabra)) {
        parrafoPalabra[index] = letra;
        botonLetra.style.backgroundColor = "green";
      }
      console.log(letra);
    } */
    /* let indexDeParrafo = parrafoPalabra.indexOf((item, index) => {
      return item;
    }); */
    /*  console.log(indexDeParrafo);
    if (indexDeParrafo === palabra[index]) {
    } */
  }
}

crearTeclas();
