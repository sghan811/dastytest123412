import { combineReducers } from "redux";

import auth from "./authReducer";
import userType from "./userTypeReducer";
import alert from "./alertReducer";
import theme from "./themeReducer";
import profile from "./profileReducer";
import status from "./statusReducer";
import status1 from "./status1Reducer";
import homePosts from "./postReducer";
import homeBosts from "./bostReducer";
import modal from "./modalReducer";
import detailPost from "./detailPostReducer";
import detailBost from "./detailBostReducer";
import admin from "./adminReducer";
import discover from "./discoverReducer";
import suggestions from "./suggestionsReducer";
import buggestions from "./buggestionsReducer";
import socket from "./socketReducer";
import notify from "./notifyReducer";
import message from "./messageReducer";

export default combineReducers({
  auth,
  alert,
  theme,
  profile,
  status,
  status1,
  homePosts,
  homeBosts,
  modal,
  detailPost,
  detailBost,
  userType,
  admin,
  discover,
  suggestions,
  buggestions,
  socket,
  notify,
  message,
});
