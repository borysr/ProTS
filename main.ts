/* tslint:disable:typedef */
interface IAudio {
    play(): any;
}

class Song implements IAudio {
    constructor (private artist: string, private title: string) {
    }
    play(): void {
        console.log("Playing " + this.title + "by " + this.artist);
    }

    static Comparer(a: Song, b: Song) {
        if(a.title === b.title) {
            return 0;
        }

        return a.title > b.title ? 1:-1;
    }
}

class Jukebox {
    constructor(private songs: Song[]) {
    }

    play () {
        var song = this.getRandomSong();
        song.play();
    }
    private getRandomSong() {
        var songCount = this.songs.length;
        var songIndex = Math.floor(Math.random() * songCount);

        return this.songs[songIndex];
    }
}

class Playlist {
    constructor (public songs: IAudio[]) {
        // default constructor
    }

    play() {
        var song = this.songs.pop();
        if (song) {
            song.play();
        }
    }

    sort() {
        this.songs.sort(Song.Comparer);
    }
}

var songs = [
    new Song("Bushbaby", "Megaphone"),
    new Song("Delays", "One More Lie In"),
    new Song("Goober Gun","Stereo"),
    new Song("Sohnee","Shatter"),
    new Song("Get Amped","Celebrity")
];

var jukebox = new Jukebox(songs);
console.log("===== Jukebox");
jukebox.play();
jukebox.play();
jukebox.play();

var playlist = new Playlist(songs);
console.log("====== Playlist ");
playlist.play();
playlist.play();
playlist.play();
