import React from 'react';
import TaskStatus from './task_status';

const Task = ({ task, onDelete, onUpdate }) => {
  return (
    <div>
      <span>Tarea: {task.text}</span>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
      <button onClick={() => onUpdate(task.id)}>Editar</button>
      <TaskStatus task={task} onUpdateStatus={onUpdate} />
    </div>
  );
};

export default Task;
