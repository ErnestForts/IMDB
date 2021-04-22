"use strict";
exports.__esModule = true;
var clases_1 = require("./clases");
var clases_2 = require("./clases");
var readline = require("readline");
console.log("Introduzca una nueva pelicula: ");
// let title = prompt("Titulo pelicula: ");
// let releaseYear = prompt("Año estreno: ");
// let Actors = prompt("Actores (separados por comas): ");
// var arrayActors =  Actors.split(',');
// let nacionality = prompt("Nacionalidad: ");
// let director = prompt("Director: ");
// let writer = prompt("Escritor: ");
// let language = prompt("Idioma: ");
// let plataform = prompt("Plataforma: ");
// let titplataformle = prompt("Titulo pelicula: ");
// let isMCU = prompt("Es del UCM?(si/no): ");
// let mainCharacterName = prompt("Nombre protagonista: ");
// let producer = prompt("Productor: ");
// let distributor = prompt("Distribuidor: ");
// let genre = prompt("Generos (separados por comas): ");
// var arraygenre =  genre.split(',');
var arrayActors = [];
var arraygenre = [];
var isMCU = false;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Titulo pelicula: ", function (title) {
    rl.question("Año estreno: ", function (releaseYear) {
        rl.question("Actores (separados por comas): ", function (Actors) {
            arrayActors = Actors.split(',');
            rl.question("Nacionalidad: ", function (nacionality) {
                rl.question("Director: ", function (director) {
                    rl.question("Escritor: ", function (writer) {
                        rl.question("Idioma: ", function (language) {
                            rl.question("Plataforma: ", function (plataform) {
                                rl.question("Es del UCM?(si/no): ", function (esUCM) {
                                    (esUCM == "si") ? isMCU = true : isMCU = false;
                                    rl.question("Nombre protagonista: ", function (mainCharacterName) {
                                        rl.question("Productor: ", function (producer) {
                                            rl.question("Distribuidor: ", function (distributor) {
                                                rl.question("Generos (separados por comas): ", function (genre) {
                                                    arraygenre = genre.split(',');
                                                    var movie = new clases_1.Movie(title, parseInt(releaseYear), nacionality, arraygenre);
                                                    movie.actors = arrayActors;
                                                    movie.director = director;
                                                    movie.writer = writer;
                                                    movie.language = language;
                                                    movie.plataform = plataform;
                                                    movie.isMCU = isMCU;
                                                    movie.mainCharacterName = mainCharacterName;
                                                    movie.producer = producer;
                                                    movie.distributor = distributor;
                                                    var imdb = new clases_2.Imdb([movie]);
                                                    console.log(imdb.peliculas);
                                                    imdb.addToJson(movie, "imdbBBDD.json");
                                                    rl.close();
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
rl.on("close", function () {
    process.exit(0);
});
// let movieArr : Imdb = new Imdb ([movie1,movie2,movie3,movie4])
