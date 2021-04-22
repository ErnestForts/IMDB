"use strict";
exports.__esModule = true;
exports.Imdb = exports.Movie = exports.Professional = void 0;
var fs = require("fs");
var Professional = /** @class */ (function () {
    function Professional(name, age, genere, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genere = genere;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.toString = function () {
        console.log("\nName: " + this.name, "\nAge: " + this.age, "\nGenere: " + this.genere, "\nWeight: " + this.weight, "\nHeight: " + this.height, "\nHair color: " + this.hairColor, "\nEye color: " + this.eyeColor, "\nRace: " + this.race, "\nIs retired: " + this.isRetired, "\nNationality: " + this.nationality, "\nOscars number: " + this.oscarsNumber, "\nProfession: " + this.profession);
    };
    return Professional;
}());
exports.Professional = Professional;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.toString = function () {
        console.log("\nTitle: " + this.title, "\nRelease year: " + this.releaseYear, "\nActors: " + this.actors, "\nNacionality: " + this.nacionality, "\nDirector: " + this.director, "\nWriter: " + this.writer, "\nLanguage: " + this.language, "\nPlatform: " + this.plataform, "\nIs MCU: " + this.isMCU, "\nMain character name: " + this.mainCharacterName, "\nProducer: " + this.producer, "\nDistributor: " + this.distributor, "\nGenre: " + this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var jsonStr = JSON.stringify(this.peliculas);
        fs.writeFileSync(nombreFichero, jsonStr);
    };
    Imdb.prototype.obtenersInstanciaImdb = function (nombreFichero) {
        var file = fs.readFileSync(nombreFichero, 'utf8');
        var imdb = new Imdb(JSON.parse(file));
        return imdb;
    };
    Imdb.prototype.addToJson = function (pelicula, fichero) {
        var imdb = this.obtenersInstanciaImdb(fichero);
        imdb.peliculas.push(pelicula);
        var jsonStr = JSON.stringify(imdb);
        fs.writeFileSync(fichero, jsonStr);
    };
    return Imdb;
}());
exports.Imdb = Imdb;
