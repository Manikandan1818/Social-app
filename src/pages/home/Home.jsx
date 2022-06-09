import { Feed } from "../../components/feed/Feed";
import { Leftbar } from "../../components/leftbar/Leftbar";
import { Rightbar } from "../../components/rightbar/Rightbar";
import { Topbar } from "../../components/Topbar/Topbar";
import "./home.css";

export const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};
