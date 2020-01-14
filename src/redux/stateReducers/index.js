import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import * as auth from "./auth";
import * as users from "./users";

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth: combineReducers(auth),
    users: combineReducers(users)
    
  });
