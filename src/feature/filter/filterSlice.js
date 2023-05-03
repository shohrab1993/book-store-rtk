import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  filters: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searched: (state, action) => {
      state.search = action.payload;
    },
    filtered: (state, action) => {
      state.filters = action.payload;
    },
  },
});
export const { searched, filtered } = filterSlice.actions;
export default filterSlice.reducer;
