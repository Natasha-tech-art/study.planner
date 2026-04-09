import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// Note: Only keep the line below if you have created Footer.js in your components folder!
// import Footer from './components/Footer'; 

import './App.css';

// 1. Placeholder components
const Home = () => <div><h1>Dashboard</h1><p>Welcome to your study planner!</p></div>;
const Subjects = () => <div><h1>Subjects</h1></div>;
const Tasks = () => <div><h1>Tasks</h1></div>;
const Calendar = () => <div><h1>Calendar</h1></div>;
const Settings = () => <div><h1>Settings</h1></div>;
const Login = () => <div><h1>Login</h1></div>;

// 2. The App Function
function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
