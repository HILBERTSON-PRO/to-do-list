import { useState } from "react";
import Header from "./Header";
import Taskinput from "./TaskInput";
import Tasklist from "./TaskList";
import { useEffect } from "react";

const TODO_KEY = "takslist";

export default function App() {
  const [tasksItem, setTasksItem] = useState([]);
  useEffect(() => {
    const tasksList = localStorage.getItem(TODO_KEY);
    if (tasksList) {
      setTasksItem(JSON.parse(tasksList));
    }
  }, []);

  function onAddTask(task) {
    const tasksList = JSON.parse(localStorage.getItem(TODO_KEY)) ?? [];
    setTasksItem((tasksItem) => [...tasksItem, task]);
    tasksList.push(task);
    localStorage.setItem(TODO_KEY, JSON.stringify(tasksList));
  }
  function onDeleteTask(id) {
    setTasksItem((tasksItem) => tasksItem.filter((task) => task.id !== id));
  }

  function handleClearTasks() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all taks?"
    );

    if (confirmed) setTasksItem([]);
  }
  return (
    <div>
      <Header />
      <Taskinput onaddTask={onAddTask} key={0} />
      <Tasklist
        tasksItem={tasksItem}
        ondeleteTask={onDeleteTask}
        delAll={handleClearTasks}
        key={1}
      />
    </div>
  );
}
