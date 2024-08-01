import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: []
};

export const admissionSlice = createSlice({
  name: "upcommingDetails",
  initialState,
  reducers: {
    setUpcommingDetails: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setUpcommingDetails } = admissionSlice.actions;

export default admissionSlice.reducer;