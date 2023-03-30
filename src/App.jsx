import TaskForm from "./components/TaskForm";
import { useEffect, useState } from "react";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";
import Container from "./components/Container";

function App() {
  const [taskItems, setTaskItems] = useState([]);

  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    let data = window.localStorage.getItem("tasks");
    if (data) setTaskItems(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const createTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName) && taskName) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTask = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  return (
    <main className="bg-dark min-vh-100 text-white">
      <Container>
        <TaskForm createTask={createTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          isCheked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          deleteTask={deleteTask}
        />
        {showCompleted && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
