import { configureStore, createReducer, createAction } from '@reduxjs/toolkit'

const increment = createAction('myValue/increment');
const decrement = createAction('myValue/increment');

console.log(increment.toString());


const myReducer = createReducer(100, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
  },
})