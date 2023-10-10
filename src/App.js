import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'
// import { useState, useEffect } from 'react';
// import Card from './Card';
// import Boards from './boards.js'
import Status from './Status.js'
import Priority from './Priority';
import Byuser from './Byuser.js';

// useNavigate


function App() {

  return (
    <div >
      <Router>
        <Navbar></Navbar>
        <Routes>


          <Route path='/' element={<Status />} />
          <Route path='/user' element={<Byuser />} />
          <Route path='/priority' element={<Priority />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
