// Counter 2
// import { createStore } from "redux";

// //Khởi tạo state 
// const initialState = {count: 0};

// function counterReducer(state = initialState, action){
//     switch(action.type){
//         case 'increment':
//             return {
//                 count: state.count + 1
//             }
//         case 'decrement':
//             return {
//                 count: state.count - 1
//             }
//         case 'reset':
//             return {
//                 count: 0
//             }
//         default: return state
//     }
// }

// const store = createStore(counterReducer);

// export default store;



// Counter 3
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const store = configureStore({
    reducer : counterSlice,
})

export default store;