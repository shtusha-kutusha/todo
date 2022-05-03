import './App.css';
import TaskTitle from './components/TaskTitle/TaskTitle';
import TaskSearch from './components/TaskSearch/TaskSearch';
import AddingTask from './components/AddingTask/AddingTask';
import TaskList from './components/TaskList/TaskList';
import data from './data.json';
import { useState } from 'react';

function App() {
  const dataCopy = data.map(task => ({ ...task, highlight: false }));
  const [tasks, setTasks] = useState(dataCopy);

  function updateTaskComplete(updateID, updateComplete) {
    const updateTasks = tasks.slice();
    const task = updateTasks.find(({ id }) => id === updateID);
    task.complete = updateComplete;
    setTasks(updateTasks);
  }

  function updateTaskName(updateID, updateName) {
    const updateTasks = tasks.slice();
    const task = updateTasks.find(({ id }) => id === updateID);
    task.name = updateName;
    setTasks(updateTasks);
  }

  function deleteTask(deleteID) {
    const updateTasks = tasks.slice();
    const taskIndex = updateTasks.findIndex(({ id }) => id === deleteID);
    updateTasks.splice(taskIndex, 1);
    setTasks(updateTasks);
  }

  function addTask(name) {
    const updateTasks = tasks.slice();
    const task = {
      id: `id${Date.now()}`,
      name,
      complete: false,
    };
    updateTasks.push(task);
    setTasks(updateTasks);
  }

  function searchTask(text) {
    const updateTasks = tasks.slice();
    updateTasks.forEach((task) => { task.highlight = task.name.includes(text); })
    setTasks(updateTasks);
  }

  function resetTasks() {
    const updateTasks = tasks.slice();
    updateTasks.forEach((task) => { task.highlight = false; })
    setTasks(updateTasks);
  }

  return (
    <div className="todoApp">
      <TaskTitle tasks={tasks} />
      <TaskSearch
        resetTasks={resetTasks}
        searchTask={searchTask} />
      <AddingTask addTask={addTask} />
      <TaskList
        data={tasks}
        updateTaskComplete={updateTaskComplete}
        deleteTask={deleteTask} 
        updateTaskName={updateTaskName}
      />
    </div>
  );
}

export default App;
