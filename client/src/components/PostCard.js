import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardBody from "./home/post_card/CardBody";
import CardFooter from "./home/post_card/CardFooter";
import CardHeader from "./home/post_card/CardHeader";
import CardHeaderComu from "./home/post_card/CardHeaderComu";
import CommentsPeek from "./home/CommentsPeek";
import InputComment from "./home/InputComment";
import BostCard from "./BostCard";
import LoadIcon from "../images/loading.gif";
import LoadMoreBtn from "./LoadMoreBtn";
import { getDataAPI } from "../utils/fetchData";
import { BOST_TYPES } from "../redux/actions/bostAction";

const PostCard = ({ post, theme }) => {
  const { homeBosts, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);

  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataAPI(
      `bosts?limit=${homeBosts.page * 9}`,
      auth.token
    );
    dispatch({
      type: BOST_TYPES.GET_BOSTS,
      payload: { ...res.data, page: homeBosts.page + 1 },
    });
    setLoad(false);
  };
  return (
    <div className="card">
      {homeBosts.bosts.map((bost) =>
        bost.community === post.community ? (
          <>
            <CardHeaderComu post={post} bost={bost} theme={theme} />
          </>
        ) : (
          <>
            <CardHeader post={post} />
          </>
        )
      )}
      <CardBody post={post} theme={theme} />
      <CardFooter post={post} />
      <CommentsPeek post={post} />
      <InputComment post={post} />
    </div>
  );
};

export default PostCard;
