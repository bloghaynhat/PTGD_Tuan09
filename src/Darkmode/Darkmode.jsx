"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./themeSlice";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        theme ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">My Application</h1>
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className={`
              flex items-center justify-between w-16 h-8 rounded-full p-1 transition-colors duration-300
              ${theme ? "bg-gray-700" : "bg-gray-200"}
            `}
            aria-label={`Switch to ${theme ? "dark" : "light"} mode`}
          >
            <span
              className={`
                flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300
                ${
                  theme ? "translate-x-8 bg-gray-900" : "translate-x-0 bg-white"
                }
              `}
            >
              {theme ? (
                <Moon className="h-4 w-4 text-yellow-300" />
              ) : (
                <Sun className="h-4 w-4 text-yellow-500" />
              )}
            </span>
          </button>
        </div>

        <div
          className={`p-6 rounded-lg mb-6 ${
            theme ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Current Theme: {theme}</h2>
          <p className="mb-4">
            This is a full screen theme toggle demonstration. The entire
            viewport changes based on the selected theme.
          </p>
          <p>
            Click the toggle button in the top-right corner to switch between
            light and dark modes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className={`p-6 rounded-lg ${
              theme ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h3 className="text-lg font-medium mb-2">Features</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full screen theme application</li>
              <li>Smooth transitions between themes</li>
              <li>Accessible toggle control</li>
              <li>Responsive design</li>
            </ul>
          </div>
          <div
            className={`p-6 rounded-lg ${
              theme ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h3 className="text-lg font-medium mb-2">Benefits</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Improved readability in different lighting conditions</li>
              <li>Reduced eye strain during nighttime usage</li>
              <li>Modern user experience</li>
              <li>Personalized user interface</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
