import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  messages: [
    "You will have a good day",
    "You will have a mediocre day",
    "You will have a bad day...",
    "You will have an AMAZING day!",
  ],
  currentMessage: "Fortune for today",
  currentBackground: "bg1",
  imageBackgrounds: {
    bg1: require("../../assets/sunny.png"),
    bg2: require("../../assets/snow.png"),
    bg3: require("../../assets/rain.png"),
    bg4: require("../../assets/cloudy.png"),
  },
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    setMessage(state, action) {
      state.currentMessage = action.payload;
    },
    setBackgroundImage(state, action) {
      state.currentBackground = action.payload;
    },
  },
});

export const { increment, setMessage, setBackgroundImage } = generalSlice.actions;
export default generalSlice.reducer;
