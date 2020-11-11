import React, { useState } from "react";
import "./../styles/App.css";
function App() {
  const [listItem, setListItem] = useState([]);
  const [input, setinput] = useState("");

  const ToDoList = (props) => {
    const { item, onDelete, id, onEdit } = props;
    const [edit, setEdit] = useState(false);
    const [save, setSave] = useState(false);
    const [editvalue, setEditvalue] = useState("");
    if (!item || !item.trim()) return null;
    return (
      <>
        <div className="list">
          <li>{item}</li>
          <button onClick={() => onDelete(id)}>
            <span>delete</span>
          </button>
          <button
            onClick={() => {
              if (edit) {
                setEdit(false);
                setSave(false);
              } else setEdit(true);
            }}
          >
            <span>edit</span>
          </button>
          {edit ? (
            <input
              id="task"
              type="input"
              placeholder="AddItem"
              onChange={(event) => {
                if (event.target.value.length >= 1) setSave(true);
                else setSave(false);
                setEditvalue(event.target.value);
              }}
            />
          ) : (
            ""
          )}
          {save ? (
            <button
              onClick={() => {
                onEdit(id, editvalue);
                setEdit("");
                setSave(false);
                setEdit(false);
              }}
            >
              save
            </button>
          ) : (
            ""
          )}
        </div>
      </>
    );
  };
  const handleDelete = (id) => {
    const filtervalue = listItem.filter((item, index) => index !== id);
    setListItem(filtervalue);
    console.log(id);
  };

  const handleEdit = (id, value) => {
    const item_copy = [...listItem];
    item_copy[id] = value;
    setListItem(item_copy);
  };

  const handleChange = (event) => {
    setinput(event.target.value);
  };

  const additem = () => {
    const addItem = [...listItem, input];
    setListItem(addItem);
    setinput("");
  };
  return (
    <div id="main">
      <div>
        <input
          id="task"
          type="input"
          placeholder="AddItem"
          value={input}
          onChange={handleChange}
        />
        <button id="btn" onClick={additem}>
          <span>add</span>
        </button>
      </div>
      <br />
      <div className="list">
        <ol>
          {listItem.map((itemval, index) => {
            return (
              <ToDoList
                item={itemval}
                key={index}
                id={index}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
