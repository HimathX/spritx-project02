import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Players from "./pages/Dashboard";
import TeamManagement from "./pages/TeamManagement"; 
import Navbar from './components/Navbar.jsx';
import './App.css';
import Footer from './components/Footer.jsx';
import Leaderboard from './pages/Leaderboard.jsx';

function App() {
  

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Players/>}/>
        <Route path='/team' element={<TeamManagement/>}/>
        <Route path='/leaderboard' element={<Leaderboard/>}/>
      </Routes>
      <Footer></Footer>

    </Router>
  )
}

export default App
