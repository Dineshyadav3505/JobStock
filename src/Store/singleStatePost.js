import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: []
};

export const admissionSlice = createSlice({
  name: "stateDetails",
  initialState,
  reducers: {
    setStatePostDetails: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setStatePostDetails } = admissionSlice.actions;

export default admissionSlice.reducer;