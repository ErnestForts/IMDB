import {Professional} from "./clases"
import {Movie} from "./clases"
import {Imdb} from "./clases"
import * as readline from 'readline'

let profe1:Professional = new Professional("Brad Pitt",57,"Male",78,180,"Brown","Blue","White",false,"American",1,"Actor")
let profe2:Professional = new Professional("Angelina Jolie",45,"Famale",56,169,"Brown","Blue","White",false,"American",1,"Actress")
let profe3:Professional = new Professional("Morgan Freeman",83,"Male",79,188,"White","Brown","Black",false,"American",1,"Actor")
let profe4:Professional = new Professional("Clint Eastwood",90,"Male",78,172,"White","Blue","White",true,"American",5,"Director")

profe1.toString()
profe2.toString()
profe3.toString()
profe4.toString()

let movie1:Movie = new Movie("Gran Torino",2008,"American",["Drama","Police"])
let movie2:Movie = new Movie("Pulp Fiction",1994,"American",["Action", "Drama", "Crime"])
let movie3:Movie = new Movie("Mr. & Mrs. Smith",2005,"American",["Action","Comedi"])
let movie4:Movie = new Movie("A Clockwork Orange",1971,"American",["Drama","Police","Thriller"])

movie1.actors = new Array("Clint Eastwood","Bee Vang","Ahney Her","Christopher Carley")
movie1.director = "Clint Eastwood"
movie1.writer = "Nick Schenk"
movie1.language = "Inglish"
movie1.plataform = "Netflix"
movie1.isMCU = false
movie1.mainCharacterName = "Walt Kowalski"
movie1.producer = "Warner Bros"
movie1.distributor = "Warner Bros"

movie2.actors = new Array("John Travolta","Samuel L. Jackson","Uma Thurman","Bruce Willis")
movie2.director = "Quentin Tarantino"
movie2.writer = "Quentin Tarantino"
movie2.language = "Inglish"
movie2.plataform = "Amazon Prime"
movie2.isMCU = false
movie2.mainCharacterName = "Vincent Vega"
movie2.producer = "Miramax Films"
movie2.distributor = "Miramax Films"

movie3.actors = new Array("Brad Pitt","Angelina Jolie","Vince Vaughn","Adam Brody")
movie3.director = "Doug Liman"
movie3.writer = "Simon Kindberg"
movie3.language = "Inglish"
movie3.plataform = "Netflix"
movie3.isMCU = false
movie3.mainCharacterName = "John Smith"
movie3.producer = "Summit Entertainment"
movie3.distributor = "Fórum Hungary"

movie4.actors = new Array("Malcolm McDowell", "Patrick Magee", "Michael Bates")
movie4.director = "Stanley Kubrick"
movie4.writer = "Stanley Kubrick"
movie4.language = "Inglish"
movie4.plataform = "Netflix"
movie4.isMCU = false
movie4.mainCharacterName = "Alex"
movie4.producer = "Warner Bros"
movie4.distributor = "Warner Bros"

movie1.toString()
movie2.toString()
movie3.toString()
movie4.toString()

let movieArr : Imdb = new Imdb ([movie1,movie2,movie3,movie4])
movieArr.escribirEnFicheroJSON("imdbBBDD.json");
console.log(movieArr.obtenersInstanciaImdb("imdbBBDD.json").peliculas);

var arrayActors = [];
var arraygenre =  [];
var isMCU = false;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Titulo pelicula: ", function(title) {
    rl.question("Año estreno: ", function(releaseYear) {
        rl.question("Actores (separados por comas): ", function(Actors) {
            arrayActors = Actors.split(',');
            rl.question("Nacionalidad: ", function(nacionality) {
                rl.question("Director: ", function(director) {
                    rl.question("Escritor: ", function(writer) {
                        rl.question("Idioma: ", function(language) {
                            rl.question("Plataforma: ", function(plataform) {
                                rl.question("Es del UCM?(si/no): ", function(esUCM) {
                                    (esUCM == "si") ? isMCU = true : isMCU = false;
                                    rl.question("Nombre protagonista: ", function(mainCharacterName) {
                                        rl.question("Productor: ", function(producer) {
                                            rl.question("Distribuidor: ", function(distributor) {
                                                rl.question("Generos (separados por comas): ", function(genre) {
                                                    arraygenre =  genre.split(',');
                                                    var movie = new Movie(title,parseInt(releaseYear),nacionality,arraygenre);
                                                    movie.actors = arrayActors;
                                                    movie.director = director;
                                                    movie.writer = writer;
                                                    movie.language = language;
                                                    movie.plataform = plataform;
                                                    movie.isMCU = isMCU;
                                                    movie.mainCharacterName = mainCharacterName;
                                                    movie.producer = producer;
                                                    movie.distributor = distributor;
                                                    
                                                    let imdb : Imdb = new Imdb([movie]);
                                                    console.log(imdb.peliculas);
                                                    
                                                    imdb.addToJson(movie,"imdbBBDD.json");
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

rl.on("close", function() {
    process.exit(0);
});