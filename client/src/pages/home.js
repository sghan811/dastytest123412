import React from "react";
import { useSelector } from "react-redux";

import Posts from "../components/home/Posts";
import Status from "../components/home/Status";
import CommunityMenu from "../components/home/CommunityMenu";
import RightSideBar from "../components/home/RightSideBar";

import LoadIcon from "../images/loading.gif";

const Home = () => {
  const { homePosts } = useSelector((state) => state);
  console.log(homePosts);
  return (
    <div className="home-grid">
      <div className="">
        <Status />
        {homePosts.loading ? (
          <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
        ) : homePosts.result === 0 ? (
          <h2 className="text-center">No Community</h2>
        ) : (
          <CommunityMenu />
        )}
        {homePosts.loading ? (
          <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
        ) : homePosts.result === 0 ? (
          <h2 className="text-center">No Post</h2>
        ) : (
          <Posts />
        )}
      </div>

      <div className="">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
