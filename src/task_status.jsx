import React, { useState } from 'react';

const TaskStatus = ({ task, onUpdateStatus }) => {
  const [status, setStatus] = useState(task.status);

  const handleStatusChange = () => {
    const newStatus = status === 'en curso' ? 'terminada' : 'en curso';
    setStatus(newStatus);
    onUpdateStatus(task.id, newStatus);
  };

  return (
    <div>
      <span>Estado: {status}</span>
      <button onClick={handleStatusChange}>Cambiar Estado</button>
    </div>
  );
};

export default TaskStatus;
