import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardBody from "./home/bost_card/CardBody";
import { Link } from "react-router-dom";
import CardFooter from "./home/bost_card/CardFooter";
import CardHeader from "./home/bost_card/CardHeader";
import Bomments from "./home/Bomments";
import InputBomment from "./home/InputBomment";
import { getDataAPI } from "../utils/fetchData";
import { PROFILE_TYPES } from "../redux/actions/profileAction";
import CommuCard from "./CommuCard";
import LoadIcon from "../images/loading.gif";
import LoadMoreBtn from "./LoadMoreBtn";
import { POST_TYPES } from "../redux/actions/postAction";
import PostCard from "./PostCard";

const BostCardOne = ({ bost }) => {
  const { homePosts, auth, theme } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);

  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataAPI(
      `posts?limit=${homePosts.page * 9}`,
      auth.token
    );
    dispatch({
      type: POST_TYPES.GET_POSTS,
      payload: { ...res.data, page: homePosts.page + 1 },
    });
    setLoad(false);
  };
  return (
    <div className="card">
      Welcome to {bost.community} community
      {homePosts.posts.map((post) =>
        bost.community == post.community ? (
          <>
            <PostCard key={post._id} post={post} theme={theme} bost={bost} />
          </>
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default BostCardOne;

{
  /* <CardHeader bost={bost} />
      <CardBody bost={bost} theme={theme} />
      <CardFooter bost={bost} />

      <Bomments bost={bost} />
      <InputBomment bost={bost} /> */
}
