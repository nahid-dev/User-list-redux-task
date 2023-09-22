import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/users/userSlice";

const store = configureStore({
  reducer: {
    data: userSlice,
  },
});

export default store;
