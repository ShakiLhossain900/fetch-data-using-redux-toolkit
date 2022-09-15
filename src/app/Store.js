import { configureStore } from "@reduxjs/toolkit";

import postReducer from "../features/posts/PostSlice"

const Store = configureStore({
  reducer: {
    counter: postReducer,
  },
});
export default Store;