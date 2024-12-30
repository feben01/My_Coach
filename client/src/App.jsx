import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import FitnessProfile from './pages/FitnessProfile';
import FitnessTracking from './pages/FitnessTracking';

const App = () => {
  return (
    <Router>
      <div>
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">My Coach</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="hover:underline">Home</a>
                </li>
                <li>
                  <a href="/register" className="hover:underline">Register</a>
                </li>
                <li>
                  <a href="/login" className="hover:underline">Login</a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">About Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="py-10 container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/fitness-profile" element={<FitnessProfile />} />
            <Route path="/fitness-tracking" element={<FitnessTracking />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
