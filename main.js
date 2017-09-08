var Song = /** @class */ (function () {
    function Song(artist, title) {
        this.artist = artist;
        this.title = title;
    }
    Song.prototype.play = function () {
        console.log("Playing " + this.title + "by " + this.artist);
    };
    Song.Comparer = function (a, b) {
        if (a.title === b.title) {
            return 0;
        }
        return a.title > b.title ? 1 : -1;
    };
    return Song;
}());
var Jukebox = /** @class */ (function () {
    function Jukebox(songs) {
        this.songs = songs;
    }
    Jukebox.prototype.play = function () {
        var song = this.getRandomSong();
        song.play();
    };
    Jukebox.prototype.getRandomSong = function () {
        var songCount = this.songs.length;
        var songIndex = Math.floor(Math.random() * songCount);
        return this.songs[songIndex];
    };
    return Jukebox;
}());
var Playlist = /** @class */ (function () {
    function Playlist(songs) {
        this.songs = songs;
        // default constructor
    }
    Playlist.prototype.play = function () {
        var song = this.songs.pop();
        if (song) {
            song.play();
        }
    };
    Playlist.prototype.sort = function () {
        this.songs.sort(Song.Comparer);
    };
    return Playlist;
}());
var songs = [
    new Song("Bushbaby", "Megaphone"),
    new Song("Delays", "One More Lie In"),
    new Song("Goober Gun", "Stereo"),
    new Song("Sohnee", "Shatter"),
    new Song("Get Amped", "Celebrity")
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
