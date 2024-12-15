import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Correct import
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Profile from '../src/components/try/Profile';
import Dashboard from '../src/components/try/Dashboard';
import Signin from './components/Signin';

const App = () => {
  const [mentorPreferences, setMentorPreferences] = useState({});

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Profile" element={<Profile setMentorPreferences={setMentorPreferences} />} />
          <Route path="/Dashboard" element={<Dashboard mentorPreferences={mentorPreferences} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
