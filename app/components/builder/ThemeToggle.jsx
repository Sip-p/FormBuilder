import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark" // ✅ Prevent error in SSR
  );

  useEffect(() => {
    if (typeof window !== "undefined") { // ✅ Ensure localStorage is available
      document.body.classList.toggle("dark-mode", darkMode);
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-lg shadow-md transition-all bg-gray-700 text-white hover:bg-gray-600"
    >
      {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}