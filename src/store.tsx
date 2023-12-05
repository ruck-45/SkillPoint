import { configureStore } from "@reduxjs/toolkit";
import activeTabReducer from "./components/NavBar/activeTabSlice";
import courseDataReducer from "./courseDataSlice";
import userDataReducer from "./userDataSlice";
import userLibraryReducer from "./userLibrarySilce";
import recentCourseReducer from "./recentCourseSlice";
import searchDataReducer from "./searchDataSlice";

const store = configureStore({
  reducer: {
    activeTab: activeTabReducer,
    courseData: courseDataReducer,
    userData: userDataReducer,
    userLibrary: userLibraryReducer,
    recentCourse: recentCourseReducer,
    searchData: searchDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
