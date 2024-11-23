import React, { useState } from "react";
import './AddTask.css'
const TaskModal = ({ task, updateTask, closeModal }) => {
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleChange = (e) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(updatedTask);
    closeModal();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal-content">
        <input
          type="text"
          name="title"
          value={updatedTask.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          className="des"
          value={updatedTask.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dueDate"
          value={updatedTask.dueDate}
          onChange={handleChange}
          required
        />
        <select name="status" value={updatedTask.status} onChange={handleChange}>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <button type="submit">Update</button>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default TaskModal;
