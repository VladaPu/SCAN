import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: window.innerWidth,
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    setScreenWidth: (state, action) => {
      state.width = action.payload;
    },
  },
});

export const { setScreenWidth } = app.actions;
export default app.reducer;
