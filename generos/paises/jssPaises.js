//variables
let listaPaises = [
  "argentina",
  "brasil",
  "mexico",
  "colombia",
  "perú",
  "chile",
  "estados unidos.",
  "canada",
  "francia",
  "alemania",
  "reino unido",
  "italia",
  "españa",
  "japon",
  "india",
  "china",
  "rusia",
  "australia",
  "sudáfrica",
  "corea del sur",
  "turquia",
  "egipto",
  "tailanda",
  "vietnam",
  "paquistan",
  "polonia",
  "paises bajos",
  "bélgica",
  "suecia",
  "suiza",
  "noruega",
  "finlandia",
  "dinamarca",
  "grecia",
  "argelia",
  "libia",
  "nigeria",
  "kenia",
  "uzbekistan",
  "iraq",
  "bangladesh",
  "indonesia",
  "argelia",
  "malasia",
  "singapur",
  "nepal",
  "mongolia",
  "nueva zelanda",
  "peru",
];
let listaIncorrectos = [];
let cadenaIncognita = [];
let pais = elegirPais();
let intentos = 5;

//funciones

//eligue un pais al azar de la lista y ademas agrega los caracteres a la lista cadenaIncognita
function elegirPais() {
  //genera el numero aleatorio
  let pais = Math.floor(Math.random() * listaPaises.length);
  //muestra el pais
  console.log(listaPaises[pais]);
  //agrega los caracteres a la lista de incognitos para mostrarla en pantalla
  for (let i = 0; i < listaPaises[pais].length; i++) {
    if (listaPaises[pais][i] != " ") {
      cadenaIncognita.push("_");
    } else {
      cadenaIncognita.push(" ");
    }
  }
  mostrarCadenaIncognita();
  return listaPaises[pais];
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
  for (let i = 0; i < pais.length; i++) {
    if (pais[i] == letra) {
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
      document.getElementById("cadenaInconnita").textContent = pais;
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
  if (cadenaIncognita.join("") == pais) {
    //modifica los datos para mostrar una victoria
    document.getElementById(
      "intentos"
    ).textContent = `Ganaste, Sobraron: ${intentos} intentos`;
    let elemento = document.getElementById("titulo");
    let elemento2 = document.getElementById("cadenaInconnita");
    let elemento3 = document.getElementById("intentos");
    elemento.style.color = "#30be30";
    elemento2.style.color = "#30be30";
    elemento3.style.color = "#30be30";
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
