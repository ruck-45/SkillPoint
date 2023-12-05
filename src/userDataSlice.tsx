import { createSlice } from "@reduxjs/toolkit";

const initialUserData = {
  value: {
    name: "",
    email: "",
    profession: "",
    bio: "",
    courses: new Array(),
    friendsOnline: 0,
    rank: 0,
  },
};

const userDataSlice = createSlice({
  name: "userData",
  initialState: initialUserData,
  reducers: {
    setUserData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
