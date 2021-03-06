import { Share } from "../share/Share";
import { Post } from "../post/Post";
import "./feed.css";
import { Posts } from "../../dummyData";

export const Feed = () => {
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};
