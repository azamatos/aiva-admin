import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

// project imports
import * as mainReducer from "./main";
import storage from "../storage";

const rootReducer = combineReducers({
  layout: persistReducer(
    {
      key: "INFO",
      storage,
      whitelist: ["isSidebarOpen", "tabs", "userProfile", "contentLimit"],
      blacklist: [],
      keyPrefix: "LAYOUT-",
    },
    mainReducer.reducer
  ),
});

export default rootReducer;
