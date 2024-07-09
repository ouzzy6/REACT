import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const handleStart = (taskIndex) => {
    const newTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, status: 'doing' };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleFinally = (taskIndex) => {
    const newTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, status: 'done' };
      }
      return task;
    });
    setTasks(newTasks);
  };

  console.log(tasks);

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To do"
          tasks={tasks.filter(task => task.status === 'todo')}
          status="todo"
          handleDelete={handleDelete}
          handleStart={handleStart}
        />
        <TaskColumn
          title="Doing"
          tasks={tasks.filter(task => task.status === 'doing')}
          status="doing"
          handleDelete={handleDelete}
          handleFinally={handleFinally}
        />
        <TaskColumn
          title="Done"
          tasks={tasks.filter(task => task.status === 'done')}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
