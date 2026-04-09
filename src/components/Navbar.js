import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// Placeholder components for your 6 pages
const Home = () => <div className="page"><h1>Dashboard & Progress</h1><p>Your streaks will show here!</p></div>;
const Subjects = () => <div className="page"><h1>Subjects</h1><p>Manage your study categories here.</p></div>;
const Tasks = () => <div className="page"><h1>Tasks</h1><p>CRUD operations for your study tasks.</p></div>;
const Calendar = () => <div className="page"><h1>Calendar</h1><p>See your deadlines at a glance.</p></div>;
const Settings = () => <div className="page"><h1>Settings</h1><p>Customize your study experience.</p></div>;
const Login = () => <div className="page"><h1>Login</h1><p>Authentication coming soon.</p></div>;

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* The Navbar stays here so it shows on every page */}
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

        {/* The Footer stays here so it shows on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;