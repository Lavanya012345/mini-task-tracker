import React, { useState } from "react";
import './AddTask.css'

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ title: "", description: "", dueDate: "", status: "Pending" });
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        name="title"
        className="text-container"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        className="text-container"
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        className="text-container"
        onChange={handleChange}
        required
      />
      <div className="row">
            <select name="status" className="text-container" value={task.status} onChange={handleChange}>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
            </select>
            <button style={{marginLeft:'20px'}} type="submit">Add Task</button>
        </div>
      
    </form>
  );
};

export default AddTask;
