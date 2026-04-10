import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import Subjects from './pages/subjects'; // Ensure this file exists!
import './App.css';

// Placeholder components kept outside to avoid "Invalid Hook" errors
const Home = () => (
  <div className="page">
    <h1>Dashboard</h1>
    <p>Welcome to your study planner!</p>
  </div>
);
const Tasks = () => <div className="page"><h1>Tasks Page</h1></div>;
const Calendar = () => <div className="page"><h1>Calendar Page</h1></div>;
const Settings = () => <div className="page"><h1>Settings Page</h1></div>;
const Login = () => <div className="page"><h1>Login Page</h1></div>;

function App() {
  // 1. Initialize State from LocalStorage
  const [subjects, setSubjects] = useState(() => {
    const saved = localStorage.getItem('study_subjects');
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Save to LocalStorage whenever 'subjects' changes
  useEffect(() => {
    localStorage.setItem('study_subjects', JSON.stringify(subjects));
  }, [subjects]);

  // 3. CRUD Logic: Add Subject
  const addSubject = (name) => {
    const newSubject = { 
      id: Date.now(), 
      name: name,
      dateCreated: new Date().toLocaleDateString() 
    };
    setSubjects([...subjects, newSubject]);
  };

  // 4. CRUD Logic: Delete Subject
  const deleteSubject = (id) => {
    setSubjects(subjects.filter(sub => sub.id !== id));
  };

  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Pass the data and functions as "props" to the Subjects page */}
            <Route 
              path="/subjects" 
              element={
                <Subjects 
                  subjects={subjects} 
                  onAdd={addSubject} 
                  onDelete={deleteSubject} 
                />
              } 
            />

            <Route path="/tasks" element={<Tasks />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/*<Footer />*/}
      </div>
    </Router>
  );
}

export default App;