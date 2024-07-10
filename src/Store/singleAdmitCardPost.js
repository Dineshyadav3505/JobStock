import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: []
};

export const admitCardDetailsSlice = createSlice({
  name: "admitCardDetails",
  initialState,
  reducers: {
    setAdmitCardDetails: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setAdmitCardDetails } = admitCardDetailsSlice.actions;

export default admitCardDetailsSlice.reducer;