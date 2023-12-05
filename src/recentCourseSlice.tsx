import { createSlice } from "@reduxjs/toolkit";

const initialRecentCourse = { value: new Array() };

const recentCourseSlice = createSlice({
  name: "recentCourse",
  initialState: initialRecentCourse,
  reducers: {
    addRecentCourse: (state, action) => {
      if (
        !state.value.some(function (el) {
          return el.id === action.payload.id;
        })
      ) {
        state.value = [...state.value, action.payload];
      }
    },
    removeRecentCourse: (state, action) => {
      state.value = state.value.filter((ele) => ele.id != action.payload);
    },
  },
});

export const { addRecentCourse, removeRecentCourse } = recentCourseSlice.actions;

export default recentCourseSlice.reducer;
