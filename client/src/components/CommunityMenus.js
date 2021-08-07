import React from "react";
import { Link } from "react-router-dom";
import CardBody from "./home/post_card/CardBody";
import CardFooter from "./home/post_card/CardFooter";
import CardHeader from "./home/post_card/CardHeader";
import CommentsPeek from "./home/CommentsPeek";
import InputComment from "./home/InputComment";

const CommunityMenus = ({ post, theme }) => {
  const hashtage = post.community;
  const hashtagelow = hashtage.toLowerCase();
  return (
    <div className="communitymenu-button">
      <button>
        <Link to={`/community/${hashtagelow}`} key={hashtagelow}>
          # {hashtagelow}
        </Link>
      </button>
    </div>
  );
};

export default CommunityMenus;
