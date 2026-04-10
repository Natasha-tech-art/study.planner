import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [username, setUsername] = useState('Student');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      
      <div className="settings-card">
        <div className="settings-item">
          <label>Display Name</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>

        <div className="settings-item">
          <span>Dark Mode</span>
          <button 
            className={`toggle-btn ${darkMode ? 'on' : ''}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? 'Enabled' : 'Disabled'}
          </button>
        </div>

        <button className="save-btn" onClick={() => alert('Settings Saved!')}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;