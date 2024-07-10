import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: []
};

export const admitCradPostSlice = createSlice({
  name: "admitCardPost",
  initialState,
  reducers: {
    setAdmitCardPost: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setAdmitCardPost } = admitCradPostSlice.actions;

export default admitCradPostSlice.reducer;