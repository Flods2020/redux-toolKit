import { configureStore } from "@reduxjs/toolkit";
import picturesReducer from "../features/picturesSlice.js";

export default configureStore({
  reducer: {
    pictures: picturesReducer,
  },
});
