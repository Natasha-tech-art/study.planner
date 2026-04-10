import React, { useState } from 'react';
import './Settings.css';
const Settings = () => {
  const [username, setUsername] = useState('Student');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="settings-card">
        {/* ... your other items ... */}
        <div className="settings-item">
          <span>Dark Mode</span>
          <button 
            className={`toggle-btn ${darkMode ? 'on' : ''}`}
            onClick={toggleDarkMode} // Use the new function here
          >
            {darkMode ? 'Enabled' : 'Disabled'}
          </button>
        </div>
        {/* ... save button ... */}
      </div>
    </div>
  );
};


export default Settings;