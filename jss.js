let botonesApretados = {};

//funciones

//se encarga de cambiar el valor de los botones
function cambiaColor(id) {
  let elemento = document.getElementById(id);
  let color = elemento.style.backgroundColor;
  //verifica que no haya elementos vacios o indefinidos
  if (color === "" || color === "undefined") {
    elemento.style.backgroundColor = "white";
    color = "white";
  }
  //cambia los colores y vuelve los valores true
  if (color == "white") {
    elemento.style.backgroundColor = "#8FBFE0";
    botonesApretados[id] = true;
  } else {
    document.getElementById(id).style.backgroundColor = "white";
    botonesApretados[id] = false;
  }
  verificarBotonesApretados();
}

//verifica si apretaste un boton y te redirije a su pagina correspondiente
function verificarBotonesApretados() {
  if (botonesApretados.botonPaises) {
    window.location.href =
      "generos/paises/indexPaises.html";
  } else if (botonesApretados.botonAnimales) {
    window.location.href =
      "generos/animales/indexAnimales.html";
  } else if (botonesApretados.botonPeliculas) {
    window.location.href =
      "generos/peliculas/indexPelicula.html";
  }
}
