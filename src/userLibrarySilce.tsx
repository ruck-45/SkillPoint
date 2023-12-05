import { createSlice } from "@reduxjs/toolkit";

const initialUserLibrary = { value: new Array() };

const userLibrarySlice = createSlice({
  name: "userLibrary",
  initialState: initialUserLibrary,
  reducers: {
    addLibraryCourse: (state, action) => {
      if (
        !state.value.some(function (el) {
          return el.id === action.payload.id;
        })
      )
        state.value = [...state.value, action.payload];
    },
    markComplete: (state, action) => {
      state.value = state.value.map((ele) => (ele.id === action.payload ? { ...ele, progress: 100 } : ele));
    },
  },
});

export const { addLibraryCourse, markComplete } = userLibrarySlice.actions;

export default userLibrarySlice.reducer;
