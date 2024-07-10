import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: []
};

export const admissionSlice = createSlice({
  name: "admissionDetails",
  initialState,
  reducers: {
    setAdmissionDetails: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setAdmissionDetails } = admissionSlice.actions;

export default admissionSlice.reducer;