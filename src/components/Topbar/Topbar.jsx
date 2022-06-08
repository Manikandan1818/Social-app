import "./topbar.css";
import { Search, Person, Notifications, Chat } from "@material-ui/icons";

export const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img src="/assets/logo.jpg" className="logoImage" alt="logo" />
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend,  post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">5</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" className="topbarImage" alt="person" />
      </div>
    </div>
  );
};
