import { useState } from "react";

function TaskForm({ createTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
          className="form-control"
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-sm">Save</button>
      </div>
    </form>
  );
}

export default TaskForm;
