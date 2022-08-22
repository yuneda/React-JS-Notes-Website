import { createSlice } from "@reduxjs/toolkit";
import { getInitialData } from "../helper";

const data = getInitialData();

const initialState = {
  data,
}

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action.payload);
      state.data.push(action.payload);
    }
  }
});

export const { add } = noteSlice.actions;
export default noteSlice.reducer;