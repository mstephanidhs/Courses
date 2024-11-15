public class Follower implements Observer {

    private String followerName;

    public Follower(String followerName) {
        this.followerName = followerName;
    }

    public void update(String status) {
        // notify the observers that channel is live
    }

    public void play() {
        // play channel
    }

    public String getFollowerName() {
        return this.followerName;
    }

    public void setFollowerName(String followerName) {
        this.followerName = followerName;
    }
}