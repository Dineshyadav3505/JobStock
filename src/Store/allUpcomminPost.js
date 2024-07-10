import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: []
};

export const upcommingSlice = createSlice({
  name: "upcommingPost",
  initialState,
  reducers: {
    setUpcommingPost: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setUpcommingPost } = upcommingSlice.actions;

export default upcommingSlice.reducer;