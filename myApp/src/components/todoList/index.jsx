import { useState } from "react";
import "./todo.css";
import TodoItem from "./todoItem";
const TodoList = () => {
  const [tasks, setTasks] = useState([]); // list of task

  const [task, setTask] = useState(""); //user input

  const [editTask, setEditTask] = useState(null); // task in editing stage

  //user input
  const onInput = (e) => {
    const value = e.target.value;
    setTask(value);
  };

  // add new task in list
  const onAdd = () => {
    if (task.length < 2) return;
    const newTask = {
      id: parseInt(Math.random() * 100000),
      task,
    };
    setTasks((prev) => [newTask, ...prev]); // returnig new Array. Copying all prev tasks and appending newtask
    setTask(""); // reseting the input
  };

  // delte task from list
  const onDelete = (taskId) => {
    setTasks((currTasks) => currTasks.filter((i) => i.id != taskId)); // filter out the task to be deleted
  };

  //on click edit btn
  const onEdit = (taskToEdit, index) => {
    taskToEdit.index = index; // index to remember the position
    setEditTask(taskToEdit); // saving task to edit
    setTask(taskToEdit.task); // text to show in input box
  };

  // save updated task
  const onSave = () => {
    if (task.length < 2) return; // should be more than 3 characters
    const updatedTask = {
      id: editTask.id,
      task,
    };
    setTasks((currTasks) => {
      currTasks[editTask.index] = updatedTask; // updating task on its index
      return currTasks;
    });
    setTask(""); // reseting the input
    setEditTask(null); // reesting the edit obj
  };

  const isEditing = !!editTask; // boolean value if user is editing

  return (
    <div className="todoList">
      {!isEditing && (
        <div className="todoInput">
          <input onChange={onInput} value={task} placeholder="Add your task" />
          <button onClick={onAdd}>Add</button>
        </div>
      )}

      {isEditing && (
        <div className="todoInput">
          <input
            onChange={onInput}
            value={task}
            placeholder="Task can't be empty"
          />
          <button onClick={onSave}>Save</button>
        </div>
      )}

      <ul className="taskList">
        {tasks.map((item, index) => (
          <TodoItem
            key={item.id} // a unique value to every item of array(list)
            onDelete={() => onDelete(item.id)}
            onEdit={() => onEdit(item, index)}
            task={item.task}
            disabled={isEditing}
          />
        ))}
        {tasks.length == 0 && <h4>No Task available</h4>}
      </ul>
    </div>
  );
};

export default TodoList;
