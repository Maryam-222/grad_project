import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Analytics from './pages/Analytics';
import About from './pages/About';
import Comment from './pages/Comment';
import Dashboard from './components/dashboard';
import PatientsList from './pages/PatientsList';
import Login from './components/login'
import SignUp from './components/signup'
import View from './components/view'
import { ThemeProvider } from './ThemeContext'
import Userprofile from './pages/profile'
import Form from './components/form';

import './App.css';
import KommunicateChat from './chat';


function App() {
  return (
    <ThemeProvider>
      <KommunicateChat />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<View />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/patientsList" element={<PatientsList />} />
          <Route path="/profile" element={< Userprofile />} />
          <Route path="/form" element={< Form />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}


export default App
