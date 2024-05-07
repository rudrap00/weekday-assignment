import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    data: [],
  },
  reducers: {
    fetchData: (state, action) => {
      state.data = [...state.data, ...action.payload];
    },
  },
});

export const { fetchData } = jobSlice.actions;

export default jobSlice.reducer;
