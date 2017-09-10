// tslint:disable typedef
//
// violation of Single Responsibility Princip[le]
// class Movie {
//     private db: DataBase;

//     constructor(private title: string, private year: number) {
//         this.db = DataBase.connect("user:pw@mydb", ["movies"]);
//     }
//     getTitle() {
//         return this.title + " ("+this.year+")";
//     }

//     saveTitle() {
//         this.db.movies.save({title: this.title, year:this.year});
//     }
// }
//
// same but following SRP
class Movie {
    constructor(private title: string, private year: number) {}
    getTitle() {
        return this.title + " ("+this.year+")";
    }
}
class MovieRepository {
    private db: DataBase;
    constructor () {
        this.db = DataBase.connect("user:pw@mydb", "movies");
    }
    save(movie: Movie) {
        this.db.movies.save(JSON.stringify(movie));
    }
}

var movie = new Movie("Theinternship", 2013);
var movieRepository = new MovieRepository();

movieRepository.save(movie);
