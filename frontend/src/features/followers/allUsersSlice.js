import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import allUsersService from "./allUsersService";

// const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  allUsers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getAllUsers = createAsyncThunk(
  "allUsers/getAll",
  async (_, thunkAPI) => {
    try {
      // console.log(user);
      const token = thunkAPI.getState().auth.user.token;
      return await allUsersService.getAllUsers(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const allUsersSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allUsers = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.allUsers = null;
      });
  },
});

export const { reset } = allUsersSlice.actions;
export default allUsersSlice.reducer;
