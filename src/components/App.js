import React from "react";
import "./../styles/App.css";

function App() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <div id="main">
        //Do not alter main div //Please do not alter the functional component
        as tests depend on the type of component.
      </div>
      <input type="text" id="task" />
      <button id="btn" onClick={handleClick}>
        Add
      </button>
    </>
  );
}

export default App;
