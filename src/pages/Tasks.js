import React, { useState } from 'react';
import './Tasks.css';

const Tasks = ({ tasks, subjects, onAddTask, onDeleteTask }) => {
  const [taskName, setTaskName] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !selectedSubject) return alert("Please fill in all fields");

    onAddTask({ name: taskName, subject: selectedSubject, priority });
    setTaskName('');
  };

  return (
    <div className="tasks-container"
    style={{backgroundColor: 'lightblue', padding: '50px',minHeight: '100vh'}}>
      <h1>Study Tasks</h1>
      
      <form onSubmit={handleSubmit} className="task-form">
        <input 
          placeholder="What do you need to study?" 
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        
        <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
          <option value="">Select Subject</option>
          {subjects.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
        </select>

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High Priority (Red)</option>
          <option value="Medium">Medium Priority (Yellow)</option>
          <option value="Low">Low Priority (Green)</option>
        </select>

        <button type="submit">Add Task</button>
      </form>

      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} className={`task-card priority-${task.priority.toLowerCase()}`}>
            <div className="task-info">
              <h3>{task.name}</h3>
              <span className="tag">{task.subject}</span>
            </div>
            <button onClick={() => onDeleteTask(task.id)}>Done</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;