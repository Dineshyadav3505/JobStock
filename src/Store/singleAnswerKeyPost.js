import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: []
};

export const admitCardDetailsSlice = createSlice({
  name: "admitCardDetails",
  initialState,
  reducers: {
    setAnswerKeyDetails: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setAnswerKeyDetails } = admitCardDetailsSlice.actions;

export default admitCardDetailsSlice.reducer;