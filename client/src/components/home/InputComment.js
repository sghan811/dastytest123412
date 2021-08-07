import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../redux/actions/commentAction";
import Icons from "../Icons";

const InputComment = ({ children, post, onReply, setOnReply }) => {
  const [content, setContent] = useState("");

  const { auth, socket, theme } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      if (setOnReply) {
        return setOnReply(false);
      }
      return;
    }

    setContent("");

    const newComment = {
      content,
      likes: [],
      user: auth.user,
      createdAt: new Date().toISOString(),
      reply: onReply && onReply.commentId,
      tag: onReply && onReply.user,
    };
    dispatch(createComment({ post, newComment, auth, socket }));
    if (setOnReply) {
      return setOnReply(false);
    }
  };

  return (
    <form className="comment_input cardpad" onSubmit={handleSubmit}>
      {children}
      {post.comments.length == 0 ? (
        <input
          type="text"
          placeholder="Write the first comment!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      ) : (
        <input
          type="text"
          placeholder="Add comments"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      )}

      <button type="submit" className="postBtn">
        Post
      </button>
    </form>
  );
};

export default InputComment;
