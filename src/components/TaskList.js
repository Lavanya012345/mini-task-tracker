import React, { useState } from "react";
import EditTaskModal from "./TaskModal";

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div className="task-card" key={index}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => setEditingTask(task)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          updateTask={(updatedTask) => {
            updateTask(updatedTask);
            setEditingTask(null);
          }}
          closeModal={() => setEditingTask(null)}
        />
      )}
    </div>
  );
};

export default TaskList;
