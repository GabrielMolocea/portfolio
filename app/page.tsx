'use client'
import { useState } from "react";
import Info from "./Body/Info";
import Tabs from "./Body/Tabs";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
      <div className="flex justify-center pt-4 ">
        <button className="w-10 h-10 " onClick={toggleTheme}>
          <img className={`rounded-full ring p-1 ${isDarkMode ? 'ring-black' : 'ring-blue-700'} `} src={isDarkMode ? "images/Moon.png" : "images/Sun.png"} alt="Toggle Theme" />
        </button>
      </div>
      <div className={`flex flex-col items-center lg:flex-row lg:justify-center lg:self-center pt-20 ${isDarkMode ? 'dark' : ''}`}>
        <Info isDarkMode={isDarkMode} />
        <Tabs isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
