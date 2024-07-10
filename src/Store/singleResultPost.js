import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: []
};

export const resultPostDetailsSlice = createSlice({
  name: "postDetails",
  initialState,
  reducers: {
    setResultPostDetails: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setResultPostDetails } = resultPostDetailsSlice.actions;

export default resultPostDetailsSlice.reducer;