import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import TeamManagement from "./pages/TeamManagement"; 
import Navbar from './components/Navbar.jsx';
import './App.css';
import Footer from './components/Footer.jsx';

function App() {
  

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/team' element={<TeamManagement/>}/>
      </Routes>
      <Footer></Footer>

    </Router>
  )
}

export default App
