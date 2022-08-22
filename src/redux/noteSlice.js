import { createSlice } from "@reduxjs/toolkit";
import { getInitialData } from "../helper";

const data = getInitialData();

const initialState = {
  data,
  keyword: "",
  filterData: data,
}

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action.payload);
      state.data.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload);
    },
    setKeyword: (state, action) => {
      state.keyword = action.payload;
      state.filterData = [...state.filterData.filter(item => item.title.includes(action.payload))];
      state.filterData = [...state.filterData, ...state.data.filter(item => item.title.includes(action.payload))];
      console.log(state.filterData);
    }
  }
});

export const { add, deleteNote, setKeyword } = noteSlice.actions;
export default noteSlice.reducer;