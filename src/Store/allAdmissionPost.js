import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: []
};

export const admissionSlice = createSlice({
  name: "admissionPost",
  initialState,
  reducers: {
    setAdmissionPost: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setAdmissionPost } = admissionSlice.actions;

export default admissionSlice.reducer;