import React, { useState } from 'react';
import TaskList from './task_list';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, status: 'en curso' };
    setTasks([...tasks, newTask]);
    setText('');
  };
  

  const updateTask = (id, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };
  
  
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

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

