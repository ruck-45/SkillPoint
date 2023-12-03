import { configureStore } from "@reduxjs/toolkit";
import activeTabReducer from "./components/NavBar/activeTabSlice";

const store = configureStore({
  reducer: {
    activeTab: activeTabReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
