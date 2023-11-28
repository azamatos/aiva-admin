import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import rootReducer from "./reducers";

const middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false, immutableCheck: false });

const store = configureStore({
  reducer: rootReducer,
  middleware,
});
const { dispatch } = store;
const persister = persistStore(store);

type RootState = ReturnType<typeof rootReducer>;
type AppStore = typeof store;
type AppDispatch = AppStore["dispatch"];

export {
  persister,
  store,
  dispatch,
  type RootState,
  type AppStore,
  type AppDispatch,
};
