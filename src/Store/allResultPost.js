import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: []
};

export const resultPostSlice = createSlice({
  name: "resultPost",
  initialState,
  reducers: {
    setResultPost: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setResultPost } = resultPostSlice.actions;

export default resultPostSlice.reducer;