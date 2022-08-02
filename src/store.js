import { configureStore, createSlice } from "@reduxjs/toolkit";

let diary = createSlice({
  name: "diary",
  initialState: [
    { id: 1, date: "2022-08-01", body: "오늘 할일은 장보기이다." },
    { id: 2, date: "2022-08-01", body: "오늘 공부내용 정리하기" },
    { id: 3, date: "2022-08-01", body: "벨로그쓰기" },
  ],
  reducers: {
    deleteMemo(state,action){
 let idx =state.findIndex(x=>x.id === action.payload)
 state.splice(idx,1)
 
    },
    addMemo(state,action){
      state.push(action.payload)
    }
  }
 
});
export let { deleteMemo,addMemo } = diary.actions;

let toggle = createSlice({
  name: "toggle",
  initialState: false,
  reducers: {
    //store는 리듀서가 필요하다(복수형이다.)
    changeDisplay(state, action) {
      //함수만들기
     return state = !state;
    },
  },
});
export let { changeDisplay } = toggle.actions;

export default configureStore({
  reducer: {
    diary: diary.reducer,
    toggle: toggle.reducer,
  },
});
