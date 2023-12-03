import { createSlice } from "@reduxjs/toolkit";

const initailActiveTab = { value: "Home" };

const activeTabSlice = createSlice({
  name: "activeTab",
  initialState: initailActiveTab,
  reducers: {
    changeTab: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTab } = activeTabSlice.actions;

export default activeTabSlice.reducer;
