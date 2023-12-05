import { createSlice } from "@reduxjs/toolkit";

const initialSearchData = { value: { data: "", search: false } };

const searchDataSlice = createSlice({
  name: "searchData",
  initialState: initialSearchData,
  reducers: {
    setSearchData: (state, action) => {
      state.value = { ...state.value, data: action.payload };
    },
    toggleSearch: (state, action) => {
      state.value = { ...state.value, search: action.payload };
    },
  },
});

export const { setSearchData, toggleSearch } = searchDataSlice.actions;

export default searchDataSlice.reducer;
