import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Subjects from './pages/Subjects';
import Tasks from './pages/Tasks';
import CalendarPage from './pages/Calendar'; // Ensure the file is named Calendar.js
import './App.css';

// Only keep placeholders for pages you HAVEN'T created separate files for yet
const Home = () => <div className="page"><h1>Dashboard</h1><p>Welcome to your study planner!</p></div>;
const Settings = () => <div className="page"><h1>Settings</h1><p>Adjust your preferences here.</p></div>;
const Login = () => <div className="page"><h1>Login</h1><p>Access your account.</p></div>;

function App() {
  const [subjects, setSubjects] = useState(() => {
    const saved = localStorage.getItem('study_subjects');
    return saved ? JSON.parse(saved) : [];
  });

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('study_tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('study_subjects', JSON.stringify(subjects));
    localStorage.setItem('study_tasks', JSON.stringify(tasks));
  }, [subjects, tasks]);

  const addTask = (data) => setTasks([...tasks, { id: Date.now(), ...data }]);
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subjects" element={<Subjects subjects={subjects} />} />
            <Route path="/tasks" element={<Tasks tasks={tasks} subjects={subjects} onAddTask={addTask} onDeleteTask={deleteTask} />} />
            <Route path="/calendar" element={<CalendarPage tasks={tasks} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;