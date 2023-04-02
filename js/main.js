"use strict";

const arrayPalabras = [
  "FIAMBRE",
  "TECHO",
  "VIVO",
  "HIJO",
  "MONSTRUO",
  "MAQUINA",
  "FARMACIA",
  "HOYUELO",
  "BATUTA",
  "BOSTEZAR",
  "MAPAMUNDI",
  "ABUELO",
  "TUERCA",
  "COMISARIO",
  "ZAPATO",
  "CACHORRO",
  "MOMIA",
  "URNA",
  "TEATRO",
  "GIRASOL",
  "EPIDEMIA",
  "FOCA",
  "REMOLQUE",
  "HAMBURGUESA",
  "GUARDABARROS",
  "BISABUELA",
  "ESQUIADOR",
  "HOMICIDIO",
  "TABLA DE SURF",
  "SILLA DE RUEDAS",
  "CINTA TRANSPORTADORA",
  "GLOBO AEROSTATICO",
  "MOTO ACUATICA",
  "ALA DELTA",
  "ESCALERAS MECANICAS",
  "HEXAGONO",
  "PARALELOGRAMO",
  "MEDIA LUNA",
  "JUEZ",
  "NARIZ",
  "KIWI",
  "PAPAYA",
  "VINAGRE",
  "FRAMBUESA",
  "GARBANZOS",
  "HUEVO",
  "ZANAHORIA",
  "POLLO",
  "HABICHUELAS",
  "DOCTOR",
  "AMIGA",
  "VALIENTE",
  "AGRIDULCE",
  "MARMOL",
  "DESPEJADO",
  "VIOLETA",
  "ABECEDARIO",
  "AEROPUERTO",
  "PINTALABIOS",
  "AYER",
  "SALVAVIDAS",
  "BIENVENIDA",
  "CEMENTERIO",
  "PARAGUAS",
  "CUMPLEAÑOS",
  "ESPANTAPAJAROS",
  "TIOVIVO",
  "NORTE",
  "DEMONIO",
  "GARRAPATAS",
  "ALFOMBRA",
  "LIMPIO",
  "COCODRILO",
  "ELEFANTE",
  "AGUILA",
  "GAVIOTA",
  "TIBURON",
  "DELFIN",
  "CANGREJO",
  "HIPOPOTAMO",
  "LEON MARINO",
  "MURCIELAGO",
  "SALTAMONTES",
  "AVESTRUZ",
  "CAMELEON",
  "CHIMPANCE",
  "COMADREJA",
  "ESCORPION",
  "GOLONDRINA",
  "LUCIERNAGA",
  "ALMUERZO",
  "ADICION",
  "ANTORCHA",
  "ACERO",
  "ARMA",
  "AMBITO",
  "AZAFRAN",
  "ANZUELO",
  "ARMARIO",
  "ACCESORIO",
  "AMULETO",
  "ARCHIVO",
  "ALMOHADA",
  "APARIENCIA",
  "AVELLANA",
  "ARBUSTO",
  "ACORDEON",
  "ARGUMENTO",
];

const arrayPistas = [
  "Es un tipo de alimento que se suele servir frío en las comidas o como aperitivo.",
  "Lo que cubre una casa o un edificio para protegerlo de la lluvia, el sol y otros elementos externos.",
  "Se refiere a algo o alguien que tiene vida o que está en funcionamiento.",
  "Es el término que se utiliza para referirse a la descendencia de una persona.",
  "Es un ser imaginario o ficticio que a menudo se representa como una criatura grande, fea y peligrosa.",
  "Es un dispositivo mecánico que se utiliza para realizar tareas de manera automática.",
  "Es un establecimiento donde se venden medicamentos y otros productos relacionados con la salud.",
  "Es una pequeña depresión o cavidad en la piel, generalmente en las mejillas o en la barbilla.",
  "Es una vara utilizada por los directores de orquesta para dirigir a los músicos.",
  "Es una acción involuntaria que se produce cuando alguien tiene sueño o está aburrido.",
  "Es una representación gráfica de la superficie terrestre en la que se pueden ver todos los continentes y océanos.",
  "Es el término que se utiliza para referirse al padre de uno de los padres.",
  "Es una pieza mecánica en forma de rosca que se utiliza para unir o fijar otras piezas.",
  "Es un oficial de policía de alto rango encargado de dirigir y supervisar una comisaría.",
  "Es una pieza de calzado que cubre el pie y que se utiliza para protegerlo y adornarlo.",
  "Es el término que se utiliza para referirse a las crías de ciertos animales, como los perros.",
  "Es un cuerpo humano o animal que ha sido preservado mediante técnicas de momificación.",
  "Es un recipiente utilizado para contener las cenizas de una persona después de la cremación.",
  "Es un lugar donde se representan obras de teatro, óperas, conciertos y otros espectáculos.",
  "Es una planta que se caracteriza por sus grandes flores amarillas y por seguir el movimiento del sol.",
  "Es la propagación de una enfermedad infecciosa en una población determinada.",
  "Es un mamífero acuático que se encuentra principalmente en regiones frías.",
  "Es un dispositivo utilizado para transportar objetos detrás de un vehículo.",
  "Es un tipo de comida rápida que consiste en una hamburguesa de carne entre dos panes.",
  "Es una pieza de metal o plástico que se coloca en la parte inferior de los vehículos para protegerlos de las salpicaduras de barro.",
  "Es el término que se utiliza para referirse a la abuela de uno de los padres.",
  "Es una persona que practica un deporte de invierno en el que se desliza sobre la nieve con unos esquís.",
  "Es un delito que consiste en matar a otra persona de forma intencional.",
  "Es un dispositivo que se utiliza para deslizarse sobre las olas del mar mientras se está de pie.",
  "Es un dispositivo que se utiliza para permitir que las personas con discapacidad puedan desplazarse con mayor facilidad.",
  "Es un dispositivo que se utiliza para transportar objetos o materiales de un lugar a otro de manera automática.",
  "Es un objeto que se utiliza para ascender en el aire gracias al gas que contiene en su interior.",
  "Es un vehículo que se utiliza para desplazarse sobre el agua a alta velocidad.",
  "Es un dispositivo que se utiliza para volar mediante la fuerza del viento.",
  "Es un dispositivo que se utiliza para subir o bajar a diferentes niveles de un edificio o en la calle, de forma automática.",
  "Es una figura geométrica que tiene seis lados y seis ángulos.",
  "Es una figura geométrica que tiene dos pares de lados paralelos.",
  "Es una figura geométrica que tiene forma de arco de circunferencia.",
  "Es una persona encargada de impartir justicia en un tribunal o juzgado.",
  "Es el órgano que se encuentra en la cara y que se utiliza para respirar y oler.",
  "Es una fruta pequeña y peluda de color marrón verdoso que tiene un interior verde con semillas negras.",
  "Es una fruta tropical de forma ovalada y pulpa anaranjada que se come fresca o en conserva.",
  "Es un líquido ácido que se utiliza para condimentar alimentos y aderezos.",
  "Es una fruta pequeña y dulce de color rojo intenso que se come fresca o en conserva.",
  "Legumbres que se utilizan en diferentes platos, como el hummus y el cocido.",
  "Alimento de forma ovalada, rico en proteínas.",
  "Es una verdura de raíz que es rica en vitamina A y que se utiliza en diferentes platos, como las ensaladas y las sopas.",
  "Cría de un ave, especialmente de la gallina.",
  "Legumbre que se utiliza en diferentes platos, como el chili y los frijoles refritos.",
  "Suele curar a enfermos.",
  "Género femenino con la que se tiene amistad.",
  "Película de Disney, en la que hay un oso.",
  "Limón con azúcar.",
  "Se utiliza principalmente en las cocinas(mesadas).",
  "Sin nubes en el cielo.",
  "Color de la combinación entre azul y magenta.",
  "Conjunto de letras de un idioma.",
  "Aterrizaje y despegue de aviones.",
  "Pinta una parte suave de la cara.",
  "Ni hoy, ni mañana.",
  "Me ahogo. ¡Ayuda! tirame un ...",
  "Siempre se da al comienzo de un año nuevo.",
  "Descansa en paz.",
  "Mary Poppins, va volando en un ...",
  "Día en que se cumple el aniversario del nacimiento de una persona.",
  "Proteje las cosechas, ahuyentando.",
  "Atracción de feria.",
  "No es Sur, es ...",
  "Tiene cola, dos cuernos y es malo.",
  "Las tienen los perros sucios.",
  "Decoran el suelo.",
  "Suele estar una persona, hasta que llega una mascota del barro.",
  "Reptil voraz de gran tamaño y acuátcio.",
  "Mamífero de gran tamaño, de color gris y con una trompa.",
  "Ave de rapiña de vista muy aguda.",
  "Ave palmípeda marina de 0,5 m de longitud aproximadamente, plumaje blanco y gris, y pico fuerte amarillento.",
  "Pez marino carnívoro de esbelto cuerpo fusiforme, con una o dos aletas dorsales y fuertes dientes.",
  "Mamífero cetáceo de unos 3 metros de longitud de lomo gris oscuro y vientre blanquecino.",
  "Crustáceo con pinzas en sus patas delanteras.",
  "Mamífero de cuerpo muy voluminoso, cabeza grande, orejas pequeñas, patas gruesas y cortas, que vive y come en ríos, lagos y pantanos.",
  "Mamífero marino de mayor tamaño que la foca.",
  "Mamífero volador, con alas membranosas y hábitos nocturno.",
  "Insecto de cuerpo alargado y que se desplaza saltando.",
  "Ave corredora de piernas y cuello largo.",
  "Reptil que cambia de color.",
  "Mono antropomorfo africano de unos 150 centímetros, de pelaje negro y brazos largos.",
  "Mamífero carnívoro de color pardo y cabeza pequeña, es muy ágil y se alimenta de roedores, aves y huevos.",
  "Aracnido que pose una cola larga terminada en aguijón.",
  "Ave pequeña de pico corto y alas puntiagudas.",
  "Insecto coleoptero que emite luz.",
  "Comida que se toma al mediodía.",
  "Amplificación o cosa que se añade, especialmente en alguna obra o escrito.",
  "Objeto que produce luz a partir de una llama, generalmente hecho de madera y tela empapada en aceite o cera.",
  "Aleación de hierro y carbono, que se utiliza para fabricar una variedad de objetos, desde herramientas hasta estructuras de edificios.",
  "Objeto utilizado para causar daño o para la defensa.",
  "Área o esfera en la que se desarrolla una actividad o tema en particular.",
  "Especia de color amarillo rojizo que se obtiene de la flor del azafrán y se utiliza como condimento y colorante en la cocina.",
  "Objeto utilizado en la pesca para atrapar peces, generalmente hecho de metal y con un gancho en un extremo.",
  "Mueble con puertas y estantes utilizado para almacenar ropa u otros objetos.",
  "Objeto que se usa junto con otro para una función específica o para completar un conjunto.",
  "Objeto que se cree que tiene poderes mágicos o protectores.",
  "Conjunto de documentos o información organizados y almacenados para su posterior recuperación.",
  "Cojín utilizado para apoyar la cabeza al dormir. ",
  "Aspecto externo o impresión que algo o que alguien produce.",
  "Fruto seco con cáscara dura y comestible.",
  "Planta leñosa de tamaño pequeño o mediano, que generalmente tiene múltiples ramas.",
  "Instrumento musical que se toca presionando y tirando de un fuelle para producir sonido.",
  "Conjunto de razones o hechos utilizados para apoyar una idea o posición en un debate o discusión.",
];

let parrafoPista = document.querySelector("p#parrafoPista");
let parrafoPalabra = document.querySelector("p.palabra");
const botonPistaElement = document.querySelector("button#pista");
const botonSonidoElement = document.querySelector("button#sonido");
let arrayGuioneBajos = [];
let palabra;
let palabraOriginal;
let pistaOriginal;

//Función para resetear las diferentes propiedades de las funciones de main, para que al cambiar de panel no se quede un valor grabado
function reseteoMain() {
  palabraOriginal = "";
  palabra = [];
  arrayGuioneBajos = [];
  parrafoPalabra.textContent = "";
  parrafoPista.textContent = "";
}

//Mediante esta función generamos un número random y le decimos que escoja una palabra de arrayPalabras
function escribirPalabraAleatroria(elemento, elementoPista) {
  reseteoMain();
  const numeroRandom = Math.floor(Math.random() * elemento.length);
  palabraOriginal = elemento[numeroRandom];
  pistaOriginal = elementoPista[numeroRandom];
  palabra = [...palabraOriginal];

  //La palabra secreta del ahorcado
  console.log(palabraOriginal);

  //Mediante un forOf, convertimos cada elemento de palabra (palabra secreta) en un "_" y lo guardamos en un nuevo array "arrayGuionesBajos"
  for (const element of palabra) {
    if (element !== " ") {
      arrayGuioneBajos.push("_");
    } else {
      arrayGuioneBajos.push(" ");
    }
    imprimirGuiones();
  }
}

//Imprimimos el contenido de arrayGuionesBajos en el párrafo que tenemos en el panel (juego), para que los "_" sean visibles
function imprimirGuiones() {
  parrafoPalabra.textContent = arrayGuioneBajos
    .toString()
    .replaceAll(" ", "ㅤ")
    .replaceAll(",", " ");
}

// Botones-----------------------------------------------
botonPistaElement.addEventListener("click", () => {
  parrafoPista.textContent = "" + pistaOriginal;
});

// Sonido click para o no la música----------------------
const audioElement = document.querySelector("audio");
let boolSonido = false;

botonSonidoElement.addEventListener("click", () => {
  if (boolSonido === true) {
    audioElement.play();
    botonSonidoElement.style.backgroundImage =
      "url('multimedia/img/nuevoDiseno/botonVolumen-8.png')";
    boolSonido = false;
  } else {
    audioElement.pause();
    botonSonidoElement.style.backgroundImage =
      "url('multimedia/img/nuevoDiseno/BotonSinvolumen-8.png')";
    boolSonido = true;
  }
});

//Export --------------------------------------------------------------------
export {
  palabra,
  palabraOriginal,
  escribirPalabraAleatroria,
  arrayPalabras,
  imprimirGuiones,
  arrayGuioneBajos,
  parrafoPalabra,
  arrayPistas,
};
