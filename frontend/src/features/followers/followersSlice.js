import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import followersService from "./followersService";

// const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  followers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getAllFollowers = createAsyncThunk(
  "followers/getAll",
  async (_, thunkAPI) => {
    try {
      // console.log(user);
      const token = thunkAPI.getState().auth.user.token;
      return await followersService.getAllFollowers(token);
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
      .addCase(getAllFollowers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllFollowers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.followers = action.payload;
      })
      .addCase(getAllFollowers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.followers = null;
      });
  },
});

export const { reset } = followersSlice.actions;
export default followersSlice.reducer;
