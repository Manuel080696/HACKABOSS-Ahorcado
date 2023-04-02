24-03-2023 a las 21:23 
ERRORES: Nos han surgido un problema al intentar sustituir las "_" de "parrafoPalabra" por las letras de "palabra" que coinciden con el input introducido ("letra" variable). 
SOLUCIONES: 
1.-Creado y solucionado el problema de transformar palabras en "", al crear un array: "arrayPalabras[]" al cúal introducimos unas palabras por defecto, dicho esto, con una variable "palabras" asignamos a cada elemento del array una letra de la palabra obtenida por Math.random(). Luego asignamos a la variable "parrafoPalabra" con .join(" ") 
2.-Creado y solucionado el problema de las teclas del juego del ahorcado. Al crear un documento JS, en el cúal, creamos un botón por cada letra del array "arrayLetras[]", y así, no creamos un HTML muy complicado

25-03-2023 a las 14:19
ERRORES: Nos ha surgido un problema a la hora de imprimir las palabras en "parrafoPalabra". Ya que se imprimen las palabras anteriores, junto con la palabra actual en forma de "_". Ejemplo:
JAVA SCRIPT_ _ _ (Siendo "_" DOM)
SOLUCIONES:
1.-Problema arreglado: al sustituir las "_" de "parrafoPalabra" por "letra"
2.-Problema arreglado: al coincidir la palabra de "parrafoPalabra" con la "palabra" del "arrayPalabras" y que nos lleve a la pantalla "mostrarPuntuaciones"

27/03 a las 13:47
ERRORES:
1. -Cuándo inicializa el ahorcado, te da una palabra. Pero cuándo se le da a nueva partida, te crea 2 palabras a mayores (y otros 2 números random). Y ambos aumentan en cantidad exponencialmente.
2. -Cuándo jugamos por primera vez, ganemos o perdamos (perder toda las vidas o darle a salir) imprime una sola vez la puntuación y el usuario. Pero cúando le damos a nueva partida y le damos a jugar,
al perder o ganar, nos aumenta exponencialmente la cantidad de nombres de usuario y la puntuación.
3. -Si el usuario coicide debería reemplazar a la puntuación anterior.
SOLUCIONES:
1.-Había que sacar los botones fuera de las funciones de los paneles (panels.js), porque sinó se duplicaban en cada ciclo todas las funciones dentro de ellas.
2.-Creamos un objeto para contador en vez de una variable nativa, para poder modificar los valores desde diferentes archivos, así poder modificar la score y que se plasme en el panel final(puntuaciones). También, hicimos que busque en local la coincidencia del nombre, mediante un findIndex(), si coincide no creará un nuevo usuario sino que le modificará la score. Pero si no existe, lo creará.

31/03 a las 12:30
ERRORES:
1.-El sonido nos lanza un error, ya que le hemos puesto play(), en el script para que empezara a reproducir. Porque poniendole autoplay, en los navegadores como Chrome o Safari, no empezaba a roproducir automáticamente sino que había que darle al botón de mute 2 veces.
SOLUCIONES:
2.-Hemos descubierto mirando en internet que el autoplay si funcionaba, hemos eliminado el play() del script porque lo que estaba ocurriendo es que en los navegadores
grandes como Chrome o Safari, han desabilitado al entrar en una página que se reproduzcan sonidos automáticamente sin consentimiento de los usuarios. Hemos provado en 
otros navegadores y funciona perfectamente.