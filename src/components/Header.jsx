import React, { useState } from "react";

const Header = () => {
  const [darkToggle, setDarkToggle] = useState(false);


  const handleDarkMode = () =>{
  const html= document.querySelector('html').setAttribute('class', 'dark');
  console.log('ki')
  if (html.class === "dark") {
    html.classList.replace("dark", "light");
    localStorage.setItem("modes", "light");
  } else {
    html.classList.replace("light", "dark");
    localStorage.setItem("modes", "dark");
  }
  }

  return (
    <div className="flex justify-between mt-5 py-3 w-full dark:bg-blue-900">
      <h1 className="text-3xl font-bold">Notes</h1>
      {/* <button 
      onClick={handleDarkMode}
      className="bg-gray-200 py-1 px-3 rounded-full font-bold dark:bg-red-500">
       */}
        <div
          className={`flex items-center justify-center rounded-full bg-gray-300 flex-col  ${
            darkToggle && "dark"
          }`}
          onClick={handleDarkMode}
        >
          <label className="toggleDarkBtn">
            <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
            <span className="slideBtnTg round"></span>
          </label>
        </div> 
        {/* Dark mode
      </button> */}
    </div>
  );
};

export default Header;

