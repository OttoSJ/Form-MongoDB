import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import messageReducer from "../features/messages/messageSlice";
import followerReducer from "../features/followers/followersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    messages: messageReducer,
    follwers: followerReducer,
  },
});
