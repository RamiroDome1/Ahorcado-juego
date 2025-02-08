//variables
let listaPeliculas = [
  "el padrino",
  "forrest gump",
  "la lista de schindler",
  "el club de la pelea",
  "pulp fiction",
  "el señor de los anillos: la comunidad del anillo",
  "el resplandor",
  "la naranja mecánica",
  "cine paraíso",
  "el viaje de chihiro",
  "gladiador",
  "el caballero oscuro",
  "titanic",
  "inception",
  "el gran lebowski",
  "matrix",
  "star wars: el imperio contraataca",
  "la vida es bella",
  "ciudad de dios",
  "el silencio de los corderos",
  "se7en",
  "el rey león",
  "jurassic park",
  "shutter island",
  "whiplash",
  "interstellar",
  "memento",
  "goodfellas",
  "la guerra de las galaxias",
  "el padrino: parte ii",
  "la la land",
  "amélie",
  "la casa de papel",
  "el secreto de sus ojos",
  "drive",
  "terminator 2: el juicio final",
  "avengers: infinity war",
  "matrix resurrections",
  "los siete samuráis",
  "el laberinto del fauno",
  "unforgiven",
  "twelve angry men",
  "la cosa",
  "vértigo",
  "a clockwork orange",
  "chinatown",
  "full metal jacket",
  "el fugitivo",
  "el sexto sentido",
  "leon",
  "los infiltrados",
  "fargo",
  "el hombre elefante",
  "el chacal de nashville",
  "gandhi",
  "el secreto de la montaña",
  "la escopeta nacional",
  "la vida de brian",
  "terminator",
  "bajo el sol de la toscana",
  "el gran hotel budapest",
  "nueve reinas",
  "unbreakable",
  "la caza",
  "el niño con el pijama de rayas",
  "espléndido hotel marigold",
  "la leyenda de los templarios",
  "el lobo de wall street",
  "la hora más oscura",
  "kill bill: vol. 1",
  "kill bill: vol. 2",
  "el hombre araña",
  "el gran dictador",
  "la jungla de cristal",
  "todo sobre mi madre",
  "ex machina",
  "leolo",
  "el coche polaco",
  "kingsman: el servicio secreto",
  "el último samurai",
  "la carrera del siglo",
  "el joven manos de tijera",
  "los otros",
  "los intocables",
  "pride",
  "el arte de amar",
  "alguien tiene que ceder",
  "la dama y el vagabundo",
  "la bella y la bestia",
  "y donde está el piloto?",
  "el destino de júpiter",
  "a ser como becky",
  "gravedad",
  "tres anuncios en las afueras",
  "el gran pez",
  "y de repente tú",
  "el gran escape",
  "cuatro bodas y un funeral",
  "the hangover",
  "el día de la marmota",
  "la isla del tesoro",
  "una mente brillante",
  "regreso al futuro",
  "el hijo del desierto",
  "v de venganza",
];
let listaIncorrectos = [];
let cadenaIncognita = [];
let pelicula = elegirPelicula();
let intentos = 5;

//funciones

//eligue pelicula al azar de la lista y ademas agrega los caracteres a la lista cadenaIncognita
function elegirPelicula() {
  //genera el numero aleatorio
  let pelicula = Math.floor(Math.random() * listaPeliculas.length);
  //muestra la pelicula
  console.log(listaPeliculas[pelicula]);
  //agrega los caracteres a la lista de incognitos para mostrarla en pantalla
  for (let i = 0; i < listaPeliculas[pelicula].length; i++) {
    if (listaPeliculas[pelicula][i] != " ") {
      cadenaIncognita.push("_");
    } else {
      cadenaIncognita.push(" ");
    }
  }
  mostrarCadenaIncognita();
  return listaPeliculas[pelicula];
}

//muestra la cadenaIncognita en el html y la dibuja
function mostrarCadenaIncognita() {
  let cadenaIncognitaString = cadenaIncognita.join("");
  document.getElementById("cadenaIncognita-text").textContent =
    cadenaIncognitaString;
}

//se encarga de verificar si la letra es correcta cambiandole el color ademas de comprobar si ganamos
function verificarLetra(letra, id) {
  //variables de la funcion
  let cantApariciones = [];
  let elemento = document.getElementById(id);
  //proceso de verificacion de datos
  for (let i = 0; i < pelicula.length; i++) {
    if (pelicula[i] == letra) {
      cantApariciones++;
      //actualiza la cadenaIncognita con la letra encontrada
      if (cadenaIncognita[i] == "_") {
        cadenaIncognita[i] = letra;
        mostrarCadenaIncognita();
      }
      //si la letra justo cae en un espacio le suma uno a la posicion para que salte el espacio
      else if (cadenaIncognita[i] == " ") {
        cadenaIncognita[i + 1] = letra;
        mostrarCadenaIncognita();
      }
    }
    else{
      let boton =document.getElementById(id);
      boton.disabled =true;
    }
    if (cantApariciones > 0) {
      //cambia botones a verde
      elemento.style.background = "#30be30";
      elemento.style.color = "black";
    } else {
      //cambia los botones a rojo
      elemento.style.background = "red";
      elemento.style.color = "black";
    } 
    
  }
 
  //si el el usuario erra la letra
  if (elemento.style.background == "red") {
    intentos--;
    document.getElementById(
      "intentos"
    ).textContent = `Intentos restantes: ${intentos}`;
    if (intentos == 0) {
      //modifica datos para mostrar una derrota
      let elemento = document.getElementById("titulo");
      document.getElementById(
        "intentos"
      ).textContent = `Perdiste, Intentos restantes: ${intentos}`;
      elemento.style.color = "red";
      document.getElementById("cadenaInconnita").textContent = pelicula;
      //bloquea los botones, asi no seguis intentando
      let botones = document.querySelectorAll("button");
      botones.forEach((boton) => {
        boton.disabled = true;
      });
    }
  }
  //llama la funcion para verificar la victoria
  verificarVictoria();
}

//se encarga de comparar las dos cadenas a ver si hemos ganado
function verificarVictoria() {
  if (cadenaIncognita.join("") == pelicula) {
    //modifica los datos para mostrar una victoria
    document.getElementById(
      "intentos"
    ).textContent = `Ganaste, Sobraron: ${intentos} intentos`;
    let elemento = document.getElementById("titulo");
    let elemento2 = document.getElementById("cadenaInconnita");
    elemento.style.color = "#30be30";
    elemento2.style.color = "#30be30";
    let botones = document.querySelectorAll("button");
    botones.forEach((boton) => {
      boton.disabled = true;
    });
  }
}

//Limpia la caja de texto
function limpearCaja() {
  document.getElementById("letra").value = "";
}
