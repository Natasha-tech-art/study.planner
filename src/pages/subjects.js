import React, { useState } from 'react';

const Subjects = ({ subjects, onAdd, onDelete }) => {
  const [subjectName, setSubjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subjectName.trim()) return; // Don't add empty subjects
    
    onAdd(subjectName);
    setSubjectName(''); // Clear the input after adding
  };

  return (
    <div className="subjects-container">
      <h1>My Subjects</h1>
      <p>Add the courses you are currently studying.</p>

      {/* Form to add new subjects */}
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          placeholder="e.g., Computer Science"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
        <button type="submit">Add Subject</button>
      </form>

      {/* List of subjects */}
      <div className="subject-list">
        {subjects.length === 0 ? (
          <p className="empty-msg">No subjects added yet. Start by typing one above!</p>
        ) : (
          subjects.map((subject) => (
            <div key={subject.id} className="subject-card">
              <div className="subject-info">
                <h3>{subject.name}</h3>
                <span>Created: {subject.dateCreated || 'Recently'}</span>
              </div>
              <button 
                className="delete-btn" 
                onClick={() => onDelete(subject.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Subjects;