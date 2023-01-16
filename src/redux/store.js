import { configureStore  } from '@reduxjs/toolkit'
import { createReducer, createAction, createSlice } from '@reduxjs/toolkit'

// make slice
const myValueSlice = createSlice({
  name: "myValue", 
  // initialState: {value: 100}, 
  initialState: 150, 
  reducers: {
    increment(state, action) {
      return state + action.payload
      // state.value += action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  }
});

console.log(myValueSlice);

export const { increment, decrement } = myValueSlice.actions;

const itemsSlice = createSlice({
  name: 'item',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload)
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
})

export const {add, remove} = itemsSlice.actions;

// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// console.log(increment.toString());


// const myReducer = createReducer(100, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

// 
// export const add = createAction('items/add');
// export const remove = createAction('items/remove')
// // IMMER
// const itemsReducer = createReducer([], {
//   // [add]: (state, action) => [...state, action.payload,],
//   [add]: (state, action) => state.push(action.payload),
//   [remove]: (state, action) => state.filter(item => item.id !== action.payload),
// });
// // 

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: itemsSlice.reducer,
  },
})

// export const store = configureStore({
//   reducer: {
//     myValue: myReducer,
//     // 
//     items: itemsReducer,
//   },
// })