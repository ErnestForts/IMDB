import {Professional} from "./clases"
import {Movie} from "./clases"
import {Imdb} from "./clases"
import * as fs from 'fs'

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

movie1.toString()

let imdb:Imdb = new Imdb([new Movie("Green Book",2018,"American",["Comedia","Dramatica"]),new Movie("Jurassic Park",1993,"American",["Action", "Aventura", "Ciencia ficción"]), new Movie("Split",2016,"American",["Action", "Terror", "Crime"])])
var jsonStr = JSON.stringify(imdb);
fs.writeFileSync("C:\\Users\\barbo\\Documents\\imdbBBDD.json",jsonStr);