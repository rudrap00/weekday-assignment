import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    data: [],
    filter: [],
  },
  reducers: {
    fetchData: (state, action) => {
      const arr = action.payload;
      const filter = state.filter;
      if (filter.length > 0) {
        state.data = [
          ...state.data,
          ...arr.filter((item) =>
            filter.reduce((acc, { key, value, type }) => {
              if (type) {
                if (type === "text")
                  return (
                    acc &&
                    item[key].toLowerCase().startsWith(value.toLowerCase())
                  );
                else return acc && item[key] >= +value;
              } else return acc && item[key] === value;
            }, true)
          ),
        ];
      } else state.data = [...state.data, ...arr];
    },
    addFilter: (state, action) => {
      const { key } = action.payload;
      const filterData = state.filter.find((item) => item.key === key);

      state.data = [];

      if (filterData)
        state.filter = state.filter.map((item) => {
          if (item.key === key) return action.payload;
          else return item;
        });
      else state.filter = [...state.filter, action.payload];
    },
    removeFilter: (state, action) => {
      state.data = [];
      state.filter = state.filter.filter(({ key }) => key !== action.payload);
    },
  },
});

export const { fetchData, addFilter, removeFilter } = jobSlice.actions;

export default jobSlice.reducer;
