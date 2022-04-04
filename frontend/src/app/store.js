import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import messageReducer from "../features/messages/messageSlice";
import allUsersReducer from "../features/followers/allUsersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    messages: messageReducer,
    allUsers: allUsersReducer,
  },
});
