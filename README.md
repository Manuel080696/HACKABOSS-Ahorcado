24-03-2023 a las 21:23 
ERRORES: Nos han surgido un problema al intentar sustituir las "_" de "parrafoPalabra" por las letras de "palabra" que coinciden con el input introducido ("letra" variable). 
SOLUCIONES: 
1.-Creado y solucionado el problema de transformar palabras en "", al crear un array: "arrayPalabras[]" al cúal introducimos unas palabras por defecto, dicho esto, con una variable "palabras" asignamos a cada elemento del array una letra de la palabra obtenida por Math.random(). Luego asignamos a la variable "parrafoPalabra" con .join(" ") 
2.-Creado y solucionado el problema de las teclas del juego del ahorcado. Al crear un documento JS, en el cúal, creamos un botón por cada letra del array "arrayLetras[]", y así, no creamos un HTML muy complicado

25-03-2023 a las 14:19
ERRORES: Nos ha surgido un problema a la hora de imprimir las palabras en "parrafoPalabra". Ya que se imprimen las palabras anteriores, junto con la palabra actual en forma de "_". Ejemplo:
JAVA SCRIPT_ _ _ (Siendo "_" DOM)
SOLUCIONES:
1-Problema arreglado: al sustituir las "_" de "parrafoPalabra" por "letra"
2-Problema arreglado: al coincidir la palabra de "parrafoPalabra" con la "palabra" del "arrayPalabras" y que nos lleve a la pantalla "mostrarPuntuaciones"
