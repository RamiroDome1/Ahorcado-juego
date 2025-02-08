//variables
let listaAnimal = [
  "el rey leon",
  "la bella y la bestia",
  "el regreso de los muertos vivientes",
  "el gran raton perez",
  "la sirenita",
  "aladdin",
  "el hobbit",
  "el señor de los anillos",
  "matilda",
  "los increibles",
  "monsters inc",
  "toy story",
  "jurassic park",
  "matrix",
  "bajo cero",
  "el padrino",
  "forrest gump",
  "la guerra de los mundos",
  "piratas del caribe",
  "spiderman",
  "batman inicia",
  "el lamento de los muertos",
  "el viaje de chihiro",
  "coraline",
  "wall e",
  "finding nemo",
  "shrek",
  "el planeta de los simios",
  "godzilla",
  "la sombra del vampiro",
  "harry potter y la piedra filosofal",
  "harry potter y la camara secreta",
  "harry potter y el prisionero de azkaban",
  "titanic",
  "el gran escape",
  "el padrino parte dos",
  "el hombre araña",
  "vengadores",
  "avengers infinity war",
  "el exorcista",
  "la casa de los 1000 cadaveres",
  "pesadilla en elm street",
  "el hombre lobo",
  "dracula",
  "frankenstein",
  "jurassic world",
  "transformers",
  "pacific rim",
  "los juegos del hambre",
  "el origen",
  "batman el caballero oscuro",
  "los increibles dos",
  "shrek 2",
  "toy story 2",
  "el viaje de los conejos",
  "buscando a dory",
  "el espantatiburones",
  "buscando a nemo",
  "como entrenar a tu dragon",
  "el zorro",
  "la liga de la justicia",
  "iron man",
  "superman el regreso",
  "la bella durmiente",
  "pinocho",
  "blancanieves",
  "los fantasmas de mis ex",
  "volando voy",
  "el solista",
  "la momia",
  "el hombre invisible",
  "el demonio",
  "gravedad",
  "el origen del planeta de los simios",
  "los siete magnificos",
  "braveheart",
  "gladiador",
  "el corcel indomable",
  "el gran hotel budapest",
  "el gran Lebowski",
  "un lugar en silencio",
  "la casa de papel",
  "el protector",
  "la cueva",
  "el abogado del crimen",
  "bajo amenaza",
  "el lobo de wall street",
  "el juramento",
  "el gran golpe",
  "el mafioso",
  "bajo la misma estrella",
  "una propuesta indecente",
  "notting hill",
  "el club de la pelea",
  "el gran escape",
  "el secreto",
  "los tres mosqueteros",
  "el ultimo samurai",
  "el corsario negro",
  "almas perdidas",
  "pasion por la verdad",
  "el hombre que sabia demasiado",
  "en busca del destino",
  "el rapto de la beldad",
  "la guerra de los mundos",
  "los duros de los duros",
  "rompe Ralph",
  "el gran golpe",
  "el niño",
  "la jungla de cristal",
  "zombieland",
  "el naufrago",
  "la carretera",
  "el renacido",
  "perdidos en el espacio",
  "el hombre del futuro",
  "el ataque de los titanes",
  "el ultimo airebender",
  "elf",
  "el regreso del hombre araña",
  "la delgada linea roja",
  "hercules",
  "hermanos de sangre",
  "los cinco",
  "el vuelo del navio",
  "se busca",
  "prince of persia",
  "los muros del miedo",
  "gravedad",
  "mujeres al borde de un ataque de nervios",
  "los indestructibles",
  "el visitante",
  "el corredor del laberinto",
  "el señor de los anillos las dos torres",
  "el manantial",
  "hunger games",
  "la casa de las conejas",
  "los rebeldes del desierto",
  "el plan perfecto",
  "con el viento a favor",
  "las aventuras de los tres amigos",
  "la sombra del vampiro",
  "almas perdidas",
  "el despertar del infierno",
  "el hombre murcielago",
  "el hombre araña",
  "avengers",
  "hombres de honor",
  "la batalla del futuro",
  "el tesoro de los mayas",
  "la chica del tren",
  "el jardin secreto",
  "la casa de papel",
  "los juegos del hambre",
  "solo el coraje",
  "el gran torbellino",
  "el silencio de los inocentes",
  "el cambio",
  "la madre",
  "fantasia",
  "fantasia dos",
  "la bella durmiente",
  "el ultimo samurai",
  "robo cop",
  "el verdugo",
  "bajo las estrellas",
  "cazadores de sombras",
  "el protector",
  "la guerra del mañana",
  "al fin el principio",
  "una vida mejor",
  "el buque fantasma",
  "la niña de los muertos",
  "despedida sin salida",
  "el ataúd",
  "el ocaso de los heroes",
  "el cerdo",
  "elfo",
  "se busca",
  "una imagen en el recuerdo",
  "inception",
  "luna de miel",
  "el cerebro de las maldades",
  "el hombre de las cavernas",
  "chico maravilla",
  "superdome",
  "cuando calla el sol",
  "almas rotas",
  "muertos vivientes",
  "el gran duelo",
  "el asesino",
  "la leyenda",
  "lo imposible",
  "la tormenta perfecta",
  "la ola",
  "el sueño de california",
  "el regreso del hombre enmascarado",
  "el amante eterno",
  "la gran carrera",
  "siempre amigos",
  "el secreto de la vida",
  "batman el caballero oscuro",
  "superman el hombre de acero",
  "titanes",
  "el hombre de hierro",
  "los siete",
  "el hijo del sol",
  "el inspector",
  "una historia de amor",
  "el lamento del alma",
  "prisioneros",
  "la cueva",
  "muertos por el sol",
  "el valor de un hombre",
  "la noche oscura",
  "el vendaval",
  "el terror de los mares",
  "la invencible",
  "el destierro",
  "la joya",
  "en busca de la tierra prometida",
  "la batalla final",
  "cazadores de sombras",
  "el despertar",
  "el espectro",
  "bajo la misma estrella",
  "regreso al futuro",
  "soul",
  "la ruta del terror",
  "los vigilantes",
  "el asesino de la senda",
];
let listaIncorrectos = [];
let cadenaIncognita = [];
let animal = elegirAnimal();
let intentos = 5;

//funciones

//eligue pelicula al azar de la lista y ademas agrega los caracteres a la lista cadenaIncognita
function elegirAnimal() {
  //genera el numero aleatorio
  let animal = Math.floor(Math.random() * listaAnimal.length);
  //muestra la pelicula
  console.log(listaAnimal[animal]);
  //agrega los caracteres a la lista de incognitos para mostrarla en pantalla
  for (let i = 0; i < listaAnimal[animal].length; i++) {
    if (listaAnimal[animal][i] != " ") {
      cadenaIncognita.push("_");
    } else {
      cadenaIncognita.push(" ");
    }
  }
  mostrarCadenaIncognita();
  return listaAnimal[animal];
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
  for (let i = 0; i < animal.length; i++) {
    if (animal[i] == letra) {
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
      document.getElementById("cadenaInconnita").textContent = animal;
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
  if (cadenaIncognita.join("") == animal) {
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
