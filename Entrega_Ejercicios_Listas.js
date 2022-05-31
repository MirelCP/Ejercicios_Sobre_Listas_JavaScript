// Variable listaCompra
let listaCompra = ["leche", "pan", "harina", "azucar", "sal"];

// Añadir elemento a la lista 
listaCompra.push("Aceite de girasol");

// Eliminar elemento de la lista
listaCompra.pop("Aceite de girasol");

// Array objetos (peliculas con 3 atributos)
const peliculasFavoritas = [
{titulo : "La vida es bella", director : "Roberto Benigni" , fecha : "1997"},
{titulo : "El padrino", director : "Francis Ford Coppola" , fecha : "1972"},
{titulo : "Un gran Poder", director : "Wes Anderson" , fecha : "2011"}];

// Lista que contiene las peliculas posteriores a 1 de enero de 2010
const peliculasPosteriores =peliculasFavoritas.filter (pelicula => pelicula.fecha < "2010-01-01");


// Nueva lista con los directores de las peliculas 
const directores = peliculasFavoritas.map (pelicula => pelicula.director);

//  Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaConTitulos = peliculasFavoritas.map(pelicula => pelicula.titulo); 

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaConTitulosYDirectores = peliculasFavoritas.map(pelicula => pelicula.titulo).concat(peliculasFavoritas.map(pelicula => pelicula.director));

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaTitulosYDirectores = [...peliculasFavoritas.map (pelicula => pelicula.titulo), ...peliculasFavoritas.map (pelicula => pelicula.director)];

