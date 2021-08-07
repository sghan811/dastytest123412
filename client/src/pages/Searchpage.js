import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Searchmobile from "../components/header/Searchmobile";
import Menu from "../components/header/Menu";
import { getPosts } from "../redux/actions/postAction";
import { getSuggestions } from "../redux/actions/suggestionsAction";
import RightSideBar from "../components/home/RightSideBar";

const Searchpage = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRefreshHome = () => {
    window.scrollTo({ top: 0 });
    dispatch(getPosts(auth.token));
    dispatch(getSuggestions(auth.token));
  };

  return (
    <div className="searchpage">
      <nav>
        <div className="container-fluid">
          <Searchmobile />
        </div>
      </nav>
    </div>
  );
};

export default Searchpage;
