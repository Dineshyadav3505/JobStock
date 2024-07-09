import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: []
};

export const jobPostDetailsSlice = createSlice({
  name: "postDetails",
  initialState,
  reducers: {
    setPostDetails: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setPostDetails } = jobPostDetailsSlice.actions;

export default jobPostDetailsSlice.reducer;