// import React, { useState } from "react";
// import "./../styles/App.css";
// function App() {
//   const [listItem, setListItem] = useState([]);
//   const [input, setinput] = useState("");

//   const ToDoList = (props) => {
//     const { item, onDelete, id, onEdit } = props;
//     const [edit, setEdit] = useState(false);
//     const [save, setSave] = useState(false);
//     const [editvalue, setEditvalue] = useState("");
//     if (!item || !item.trim()) return null;
//     return (
//       <>
//         <div className="list">
//           <li>{item}</li>
//           <button onClick={() => onDelete(id)}>
//             <span>delete</span>
//           </button>
//           <button
//             onClick={() => {
//               if (edit) {
//                 setEdit(false);
//                 setSave(false);
//               } else setEdit(true);
//             }}
//           >
//             <span>edit</span>
//           </button>
//           {edit ? (
//             <input
//               id="task"
//               type="input"
//               placeholder="AddItem"
//               onChange={(event) => {
//                 if (event.target.value.length >= 1) setSave(true);
//                 else setSave(false);
//                 setEditvalue(event.target.value);
//               }}
//             />
//           ) : (
//             ""
//           )}
//           {save ? (
//             <button
//               onClick={() => {
//                 onEdit(id, editvalue);
//                 setEdit("");
//                 setSave(false);
//                 setEdit(false);
//               }}
//             >
//               save
//             </button>
//           ) : (
//             ""
//           )}
//         </div>
//       </>
//     );
//   };
//   const handleDelete = (id) => {
//     const filtervalue = listItem.filter((item, index) => index !== id);
//     setListItem(filtervalue);
//     console.log(id);
//   };

//   const handleEdit = (id, value) => {
//     const item_copy = [...listItem];
//     item_copy[id] = value;
//     setListItem(item_copy);
//   };

//   const handleChange = (event) => {
//     setinput(event.target.value);
//   };

//   const additem = () => {
//     const addItem = [...listItem, input];
//     setListItem(addItem);
//     setinput("");
//   };
//   return (
//     <div id="main">
//       <div>
//         <input
//           id="task"
//           type="input"
//           placeholder="AddItem"
//           value={input}
//           onChange={handleChange}
//         />
//         <button id="btn" onClick={additem}>
//           <span>add</span>
//         </button>
//       </div>
//       <br />
//       <div className="list">
//         <ol>
//           {listItem.map((itemval, index) => {
//             return (
//               <ToDoList
//                 item={itemval}
//                 key={index}
//                 id={index}
//                 onDelete={handleDelete}
//                 onEdit={handleEdit}
//               />
//             );
//           })}
//         </ol>
//       </div>
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./../styles/App.css";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const task = React.useRef();
  const [taskString, setTaskString] = React.useState("");
  const [editedTaskString, setEditedTaskString] = React.useState("");
  const editedTask = React.useRef();
  const [selectedTask, setSelectedTask] = React.useState(null);

  const saveTask = () => {
    if (taskString === "") return;
    setTasks((tasks) => [
      ...tasks,
      {
        id: taskString + tasks.length,
        name: taskString
      }
    ]);
    setTaskString("");
  };

  const editTask = (id) => {
    if (editedTaskString === "") return;
    let tasksRep = tasks.map((task) => {
      let newTask = { ...task };
      if (task.id === id) newTask.name = editedTaskString;
      return newTask;
    });
    setTasks((tasks) => tasksRep);
    setSelectedTask(null);
    setEditedTaskString("");
  };

  const deleteTask = (id) => {
    let tasksRep = tasks.filter((task) => task.id !== id);
    setTasks((tasks) => tasksRep);
  };

  const edit = (id) => {
    setSelectedTask(id);
  };

  const handleTaskChange = (e) => {
    let value = e.target.value;
    setTaskString(value);
  };

  const handleEdit = (e) => {
    let value = e.target.value;
    setEditedTaskString(value);
  };

  return (
    <div id="main">
      <textarea
        id="task"
        value={taskString}
        onChange={handleTaskChange}
        ref={task}
        rows="4"
        cols="50"
      ></textarea>
      <button id="btn" onClick={saveTask}>
        save
      </button>
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>
            <span className="list">{task.name}</span>
            <button className="delete" onClick={() => deleteTask(task.id)}>
              delete
            </button>
            <button className="edit" onClick={() => edit(task.id)}>
              edit
            </button>
            {selectedTask === task.id ? (
              <>
                <textarea
                  ref={editedTask}
                  value={editedTaskString}
                  onChange={handleEdit}
                  className="editTask"
                  rows="4"
                  cols="50"
                ></textarea>
                <button className="saveTask" onClick={() => editTask(task.id)}>
                  save
                </button>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;