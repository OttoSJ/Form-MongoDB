import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import followersService from "./followersService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  followers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getFollowers = createAsyncThunk(
  "followers/getAll",
  async (user, thunkAPI) => {
    try {
      return await followersService.getAllFollowers(user);
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

export const followersSlice = createSlice({
  name: "followers",
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
      .addCase(getFollowers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFollowers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.followers = action.payload;
      })
      .addCase(getFollowers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.followers = null;
      });
  },
});

export const { reset } = followersSlice.actions;
export default followersSlice.reducer;
