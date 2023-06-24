// ADAPTED FROM https://codesandbox.io/s/3urbm?file=/src/App.js:1001-2374
import { useState, useEffect } from "react";
import { useSpring, animated, to } from "@react-spring/web";

const ModeMob = () => {
  const cachedToggleMode = localStorage.getItem("toggleMode") || "dark";
  const [toggleMode, setToggleMode] = useState(cachedToggleMode);
  // logic for setting dark/light mode
  useEffect(() => {
    localStorage.setItem("toggleMode", toggleMode);
  }, [toggleMode]);
  useEffect(() => {
    if (toggleMode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [toggleMode]);

  // function to toggle between the two modes
  const toggleDarkMode = () => {
    if (toggleMode === "dark") {
      setToggleMode("light");
    } else {
      setToggleMode("dark");
    }
  };

  return (
    <div onClick={toggleDarkMode} className="hover-pointer">
      {toggleMode === "dark" ? "Light Mode" : "Dark Mode"}
    </div>
  );
};

export default ModeMob;
