import React, { useState } from 'react';
import TaskList from './Componentes/task_list';
import useTaskManager from './Hooks/useTaskManager';
import './App.css';

function App() {
  const { tasks, createTask, updateTask, deleteTask } = useTaskManager();

  const [text, setText] = useState('');

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
        <button onClick={() => createTask(text)}>Agregar Tarea</button>
      </div>
    </div>
  );
}

export default App;