import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    data: [],
    filter: [],
  },
  reducers: {
    fetchData: (state, action) => {
      const filter = state.filter;
      const arr = action.payload;

      if (filter.length > 0) {
        state.data = [
          ...state.data,
          ...arr.filter((job) =>
            filter.reduce(
              (acc, { key, value }) => acc && job[key] === value,
              true
            )
          ),
        ];
      } else state.data = [...state.data, ...action.payload];
    },
    addFilter: (state, action) => {
      const { key } = action.payload;
      const selectedFilter = state.filter.find((item) => item.key === key);

      state.data = [];

      if (selectedFilter) {
        state.filter = state.filter.map((item) => {
          if (item.key === key) return action.payload;
          else return item;
        });
      } else state.filter = [...state.filter, action.payload];
    },
    removeFilter: (state, action) => {
      state.data = [];
      state.filter = state.filter.filter((item) => item.key !== action.payload);
    },
  },
});

export const { fetchData, addFilter, removeFilter } = jobSlice.actions;

export default jobSlice.reducer;
