import { Share } from "../share/Share";
import { Post } from "../post/Post";
import "./feed.css";

export const Feed = () => {
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
