import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    newTodo: ""
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(id= Date.now(), text= newTodo, completed= false)
        },
        removeTodo: (state, action) =>  {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleTodo: (state, action) =>  {
            state.todos.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo))
        },
        setNewTodo: (state, action) => {
            state.newTodo = action.payload
        }
    }
})

export const {addTodo, removeTodo, toggleTodo, setNewTodo} = todoSlice.actions;
export default todoSlice.reducer;