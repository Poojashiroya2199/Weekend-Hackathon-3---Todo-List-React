import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  // const initiallist = ["buy milk", "buy vegetable"];
  const [list, setList] = useState([]);
  const [inputValue, setInput] = useState("");
  const handleClick = () => {
    console.log("clicked");
    const copy = list.slice();

    if (!isEmpty(inputValue)) copy.push(inputValue);

    console.log(copy);
    setList(copy);

    setInput("");
  };
  const isEmpty = (val) => !val || !val.trim();
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onEdit = (item) => {
    let copy = item;
    setInput(copy);
  };

  const onDelete = (item) => {
    let copylist = list.filter((val) => val !== item);

    setList(copylist);
  };
  return (
    <>
      <div id="main">
        {/*Do not alter main div //Please do not alter the functional component
        as tests depend on the type of component.*/}
      </div>
      <input type="text" id="task" value={inputValue} onChange={onChange} />
      <button id="btn" onClick={handleClick}>
        Add
      </button>
      <ol>
        {list.map((item) => (
          <>
            <li key={item} className="list">
              {item}
              <button onClick={() => onEdit(item)}>edit</button>
              <button onClick={() => onDelete(item)}>Remove</button>
            </li>
          </>
        ))}
      </ol>
    </>
  );
}

export default App;
