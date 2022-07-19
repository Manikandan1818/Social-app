import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@material-ui/icons";
import { CloseFriend } from "../closeFriend/CloseFriend";
import "./leftbar.css";
import { Users } from "../../dummyData";

export const Leftbar = () => {
  return (
    <div className="leftbarContainer">
      <div className="leftbarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListitem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListitemText">Feed</span>
          </li>
          <li className="sidebarListitem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListitemText">Chats</span>
          </li>
          <li className="sidebarListitem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListitemText">Videos</span>
          </li>
          <li className="sidebarListitem">
            <Group className="sidebarIcon" />
            <span className="sidebarListitemText">Groups</span>
          </li>
          <li className="sidebarListitem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListitemText">Bookmarks</span>
          </li>
          <li className="sidebarListitem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListitemText">Questions</span>
          </li>
          <li className="sidebarListitem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListitemText">Jobs</span>
          </li>
          <li className="sidebarListitem">
            <Event className="sidebarIcon" />
            <span className="sidebarListitemText">Events</span>
          </li>
          <li className="sidebarListitem">
            <School className="sidebarIcon" />
            <span className="sidebarListitemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};
