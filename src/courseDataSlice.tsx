import { createSlice } from "@reduxjs/toolkit";

const initialCourseData = { value: new Array() };

const courseDataSlice = createSlice({
  name: "courseData",
  initialState: initialCourseData,
  reducers: {
    setCourseData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCourseData } = courseDataSlice.actions;

export default courseDataSlice.reducer;
