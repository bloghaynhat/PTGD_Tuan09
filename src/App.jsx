import { Provider } from "react-redux";
import Counter from "./Counter/Counter";
import Counter2 from "./Counter/Counter2";
// import store from "./TodoApp/store";
import { store } from "./Darkmode/store";
import Counter3 from "./Counter/Counter3";
import TodoApp from "./TodoApp/TodoApp";
import DarkModeToggle from "./Darkmode/Darkmode";

export default function App() {
  return (
    // <Provider store={store}>
    // <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-[linear-gradient(135deg,theme(colors.indigo.500),theme(colors.purple.500),theme(colors.pink.500))] animate-[gradient-x_15s_ease_infinite]">
    //   <div className="w-full max-w-md mx-auto relative">
    //     {/* Using Tailwind 4.1 arbitrary values and transforms */}
    //     <div className="absolute inset-0 -z-10 bg-white/20 backdrop-blur-lg rounded-3xl rotate-3 scale-105"></div>
    //     <div className="absolute inset-0 -z-10 bg-white/20 backdrop-blur-lg rounded-3xl -rotate-2 scale-105"></div>
    //     <div className="relative z-10 bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/50">
    //       <h1 className="text-4xl font-black text-center mb-8 text-white drop-shadow-md">
    //         <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
    //           Fancy Counter
    //         </span>
    //       </h1>
    //       <Counter3 />
    //     </div>
    //   </div>
    // </main>
    // </Provider>
    <Provider store={store}>
      {/* <TodoApp/> */}
      <DarkModeToggle />
    </Provider>
  );
}
