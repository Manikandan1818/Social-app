import "./rightbar.css";

export const Rightbar = () => {
  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Dhanya</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img className="rightbarImg" src="/assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Vigneshwari</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
