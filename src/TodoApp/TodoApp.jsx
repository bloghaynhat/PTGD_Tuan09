
import { useState } from "react"
import { PlusCircle, Trash2, CheckCircle, Circle } from "lucide-react"
import { useSelector, useDispatch } from "react-redux"
import {addTodo, removeTodo, toggleTodo, setNewTodo} from "./todoSlice"

export default function TodoApp() {

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos)
  const newTodo= useSelector(state => state.todos.newTodo)

  const handleInputChange = (e) =>{
    dispatch(setNewTodo(e.target.value))
  }

  const handleAddTodo = () =>{
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      dispatch(setNewTodo(''));
    }
  }


  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">My Tasks</h1>

      <div className="flex mb-6">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleAddTodo}
          className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors duration-300 flex items-center"
        >
          <PlusCircle size={20} className="mr-1" />
          
          Add
        </button>
      </div>

      <ul className="space-y-3 mb-6">
        {todos.length === 0 ? (
          <li className="text-center text-gray-500 py-4">No tasks found. Add some!</li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                todo.completed ? "bg-purple-50 line-through text-gray-500" : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center">
                <button
                  onClick={() => dispatch(toggleTodo(todo.id))}
                  className="mr-3 text-purple-600 hover:text-purple-800 transition-colors duration-300"
                >
                  {todo.completed ? <CheckCircle size={22} className="text-green-500" /> : <Circle size={22} />}
                </button>
                <span className="text-gray-800">{todo.text}</span>
              </div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-red-700 transition-colors duration-300"
              >
                <Trash2 size={18} />
              </button>
            </li>
          ))
        )}
      </ul>

      {todos.some((todo) => todo.completed) && (
        <div className="text-center">
          <button
            onClick={setNewTodo}
            className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-300"
          >
            Clear completed tasks
          </button>
        </div>
      )}

      <div className="mt-6 text-center text-sm text-gray-500">
        {todos.length} {todos.length === 1 ? "task" : "tasks"} • {todos.filter((todo) => !todo.completed).length}{" "}
        remaining
      </div>
    </div>
  )
}
