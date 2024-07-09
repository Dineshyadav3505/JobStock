import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: []
};

export const jobPostSlice = createSlice({
  name: "jobPost",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setPost } = jobPostSlice.actions;

export default jobPostSlice.reducer;