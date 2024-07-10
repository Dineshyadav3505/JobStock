import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: []
};

export const answerKeySlice = createSlice({
  name: "answerKeyPost",
  initialState,
  reducers: {
    setAnswerKey: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setAnswerKey } = answerKeySlice.actions;

export default answerKeySlice.reducer;