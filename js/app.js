$(document).ready(function() {
    console.log("Jquery cargado");
});





var imdb = (function() {

  // entorno privado

  // Creamos un array para guardar las noticias
  var peliculas = [];














  function agregarPelicula() {


    // Constructor Noticia
    function Pelicula() {
      this.titulo = "";
      this.descripcion = "";
      this.img = "";
    }

    // Creamos un objeto Noticia asignado a una variable
    var pelicula = new Pelicula();

    // Agregamos titulo y cuerpo
    pelicula.titulo = $("#titulo").val();
    console.log(pelicula.titulo);
    pelicula.descripcion = $("#descripcion").val();
    console.log(pelicula.descripcion);
    pelicula.img = $("#img").val();
    console.log(pelicula.img);
    // Si el usuario cargo algo hago esto, caso contrario..
    if (pelicula.titulo && pelicula.descripcion && pelicula.img !== null) {
      peliculas.push(pelicula);
      return true;
    } else {
      return false;
    }

  }


  function mostrarPeliculas() {
console.log("hola que tal");
    // Agarramos el container de noticias (fijate que metodo usamos)
    if (peliculas.length > 0) {
      console.log("hola if ");

      // capturo el elemento con ID "noticias" (fijate en el HTML)
      var containerPeliculas = $("#peliculas");


      // Creamos un par de variables para el titulo y parrafo
      var tituloConFormato;
      var parrafoConFormato;
      var imagenAgregada;








      // Iteramos sobre el array de noticias
      for (var i = 0; i < peliculas.length; i++) {

        // Creamos los elementos y los asignamos
        tituloConFormato = document.createElement("h1");
        parrafoConFormato = document.createElement("p");
        imagenAgregada = document.createElement("img");
       
      
      



        // Agrego el contenido del titulo y noticias
        tituloConFormato.append(peliculas[i].titulo);
        parrafoConFormato.append(peliculas[i].descripcion);
        imagenAgregada.append(peliculas[i].img);

        // Los agrego al DOM
        containerPeliculas.append(tituloConFormato);
        containerPeliculas.append(parrafoConFormato);
        containerPeliculas.append('<img src="'+imagenAgregada+'">');














         
      }











      // Vaciamos el array al finalizar (proba que pasa si sacas esto)
      peliculas = [];

      // Como la carga de noticias salio bien, devolvemos "true"
      return true;

    } else {
      // Si no hay nada en el array noticias devolvemos "false"
      return false;
    }

  }





function ordenarazPeliculas() {



peliculas.sort();

}

function ordenarzaPeliculas() {

peliculas.sort();

}




















  // entorno publico
  return {
    agregar: function() {
      // hacer algo
      if (agregarPelicula()) {
        return "Carga de noticias exitosa.";
      } else {
        return "No se ha cargado nada.";
      }

    },
    mostrar: function() {
      if (mostrarPeliculas()) {
        return "Cargando noticias al DOM..";
      } else {
        return "No se ha agregado ninguna noticia, cargue una antes.";
      }

    },



    ordenaraz: function() {
      if (ordenarazPeliculas()) {
        return "Cargando noticias al DOM..";
      } else {
        return "No se ha agregado ninguna noticia, cargue una antes.";
      }

    },



    ordenarza: function() {
      if (ordenarzaPeliculas()) {
        return "Cargando noticias al DOM..";
      } else {
        return "No se ha agregado ninguna noticia, cargue una antes.";
      }

    }






  };

})();

console.log("Carga de JS realizada con exito!");

var botonAgregar = $("#boton-agregar");
     botonAgregar.click = agregarPelicula ();


var botonMostrar = $("#boton-mostrar");
     botonMostrar.click = mostrarPeliculas ();


     