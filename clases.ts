export class Professional{
    public name : string
    public age : number
    public genere : string
    public weight : number
    public height : number
    public hairColor : string
    public eyeColor : string
    public race : string
    public isRetired : boolean
    public nationality : string
    public oscarsNumber : number
    public profession : string

    constructor(name : string, age : number, genere : string, weight : number, height : number, hairColor : string, eyeColor : string, race : string, isRetired : boolean, nationality : string, oscarsNumber : number, profession : string){
        this.name = name
        this.age = age
        this.genere = genere
        this.weight = weight
        this.height = height
        this.hairColor = hairColor
        this.eyeColor = eyeColor
        this.race = race
        this.isRetired = isRetired
        this.nationality = nationality
        this.oscarsNumber = oscarsNumber
        this.profession = profession
    }

    toString(){
        console.log(
                    "\nName: " + this.name,
                    "\nAge: " + this.age,
                    "\nGenere: " + this.genere,
                    "\nWeight: " + this.weight,
                    "\nHeight: " + this.height,
                    "\nHair color: " + this.hairColor,
                    "\nEye color: " + this.eyeColor,
                    "\nRace: " + this.race,
                    "\nIs retired: " + this.isRetired,
                    "\nNationality: " + this.nationality,
                    "\nOscars number: " + this.oscarsNumber,
                    "\nProfession: " + this.profession)
    }
}
export class Movie {
    public title :string
    public releaseYear : number
    public actors : string []
    public nacionality : string
    public director : string
    public writer : string
    public language : string
    public plataform : string
    public isMCU : boolean
    public mainCharacterName : string
    public producer : string
    public distributor : string
    public genre : string []

    constructor(title:string , releaseYear:number, nacionality:string, genre:string[]){
        this.title = title
        this.releaseYear = releaseYear
        this.nacionality = nacionality
        this.genre = genre
    }

    toString(){
        console.log(
                    "\nTitle: " + this.title,
                    "\nRelease year: " + this.releaseYear,
                    "\nActors: " + this.actors,
                    "\nNacionality: " + this.nacionality,
                    "\nDirector: " + this.director,
                    "\nWriter: " + this.writer,
                    "\nLanguage: " + this.language,
                    "\nPlatform: " + this.plataform,
                    "\nIs MCU: " + this.isMCU,
                    "\nMain character name: " + this.mainCharacterName,
                    "\nProducer: " + this.producer,
                    "\nDistributor: " + this.distributor,
                    "\nGenre: " + this.genre)
    }
}

export class Imdb {
    public peliculas : Movie[]

    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }
}