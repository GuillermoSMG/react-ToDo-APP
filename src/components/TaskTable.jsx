import React from "react";
import TaskRow from "./TaskRow";

function TaskTable({ tasks, toggleTask, showCompleted = false }) {
  const taskTablesRows = (done) => {
    return tasks
      .filter((task) => task.done === done)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };

  return (
    <table className="table table-dark table-hover table-striped table-bordered border-secondary">
      <thead className="table-primary">
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTablesRows(showCompleted)}</tbody>
    </table>
  );
}

export default TaskTable;
