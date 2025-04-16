import { useState, useEffect } from "react"
import confetti from "canvas-confetti"
import { gradients, buttonColors } from "./gradient"
import { useReducer } from "react";

const initialState = {count: 0};

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {
                count: state.count + 1
            }
        case 'decrement':
            return {
                count: state.count - 1
            }
        case 'reset':
            return {
                count: 0
            }
        default: return state
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
//   const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [colorIndex, setColorIndex] = useState(0)

//   const increment = () => {
//     setCount((prev) => prev + 1)
//     setIsAnimating(true)

//     // Change color every 5 counts
//     if ((count + 1) % 5 === 0) {
//       setColorIndex((colorIndex + 1) % gradients.length)
//       triggerConfetti()
//     }
//   }

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }

//   const decrement = () => {
//     setCount((prev) => prev - 1)
//     setIsAnimating(true)
//   }

//   const reset = () => {
//     setCount(0)
//     setColorIndex(0)
//     setIsAnimating(true)

//     // Special reset effect
//     triggerConfetti()
//   }

  // Reset animation state
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  return (
    <div className="relative">
      {/* Floating bubbles background - using Tailwind 4.1 arbitrary properties */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[color:var(--bubble-color)] opacity-20"
            style={{
              "--bubble-color": `hsl(${Math.random() * 360} 70% 60%)`,
              width: `${Math.random() * 50 + 10}px`,
              height: `${Math.random() * 50 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Card with backdrop blur - using Tailwind 4.1 syntax */}
      <div className="backdrop-blur-md bg-white/80 border-2 border-white shadow-xl overflow-hidden relative rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-blue-100/30 pointer-events-none" />

        <div className="pb-4 relative z-10 pt-4 px-4">
          <h2 className="text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-xl">
            Magical Counter
          </h2>
        </div>

        <div className="pb-2 relative z-10 px-4">
          <div className="flex justify-center items-center p-2">
            <div
              className={`
                text-7xl font-black text-center py-10 px-12 rounded-2xl 
                bg-gradient-to-br ${gradients[colorIndex]} shadow-lg
                transition duration-300 text-white
                ${isAnimating ? "scale-110" : "scale-100"}
                border-4 border-white/50 w-full
                motion-safe:transition-all
              `}
            >
              <div className="relative">
                <span className="relative z-10 drop-shadow-md">{state.count}</span>
                {state.count % 10 === 0 && state.count !== 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-[ping_1s_ease-in-out_infinite] absolute h-full w-full rounded-full bg-white/30"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-3 pt-4 pb-4 relative z-10 px-4">
          <button
            onClick={() => dispatch({type: 'decrement'})}
            className={`flex-1 text-white font-bold shadow-lg transition hover:scale-105 active:scale-95 ${buttonColors[colorIndex]} py-2 px-4 rounded-lg flex items-center justify-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-5 w-5"
            >
              <path d="M5 12h14" />
            </svg>
            Decrease
          </button>

          <button
            onClick={() => dispatch({type: 'reset'})}
            className="bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white font-bold shadow-lg transition hover:scale-105 active:scale-95 py-2 px-4 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
          </button>

          <button
            onClick={() => dispatch({type: 'increment'})}
            className={`flex-1 text-white font-bold shadow-lg transition hover:scale-105 active:scale-95 ${buttonColors[colorIndex]} py-2 px-4 rounded-lg flex items-center justify-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-5 w-5"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Increase
          </button>
        </div>

        {/* Special milestone indicator - using Tailwind 4.1 animation syntax */}
        {state.count !== 0 && state.count % 10 === 0 && (
          <div className="absolute top-2 right-2 animate-[bounce_1s_infinite]">
            <div className="bg-yellow-400 text-xs font-bold text-yellow-900 rounded-full p-1 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3 mr-1"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              Milestone!
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
