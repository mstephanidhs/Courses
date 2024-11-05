public class Song implements IComponent {

    public String songName;
    public String artist;
    public float speed = 1; // set default speed

    public Song(String songname, String artist) {
        this.songName = songName;
        this.artist = artist;
    }

    public void play() {
        // play the song using this.speed
    }

    public void setPlaybackSpeed(float speed) {
        this.speed = speed;
    }

    public String getName() {
        return this.songName;
    }

    public String getArtist() {
        return this.getArtist;
    }
}