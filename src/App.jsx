import React, { useState, useEffect } from 'react'; 
import TaskList from './task_list';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [text, setText] = useState('');

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, status: 'en curso' };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setText('');
  };

  const updateTask = (id, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <div className="task-list-container">
        <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button onClick={() => addTask(text)}>Agregar Tarea</button>
      </div>
    </div>
  );
}

export default App;