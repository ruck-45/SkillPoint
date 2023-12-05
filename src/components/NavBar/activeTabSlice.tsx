import { createSlice } from "@reduxjs/toolkit";

const initialActiveTab = { value: "Home" };

const activeTabSlice = createSlice({
  name: "activeTab",
  initialState: initialActiveTab,
  reducers: {
    changeTab: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTab } = activeTabSlice.actions;

export default activeTabSlice.reducer;
