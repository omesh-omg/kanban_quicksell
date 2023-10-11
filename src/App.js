// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'
// import { useState, useEffect } from 'react';
// import Card from './Card';
// import Boards from './boards.js'
import Status from './Status.js'
import Priority from './Priority';
import Byuser from './Byuser.js';
import { useState } from 'react';

// useNavigate


function App() {
  const [Grouping, setGrouping] = useState(localStorage.getItem('grouping'));
  const [Order, setOrder] = useState(localStorage.getItem('order'));
  const setGroupingValue = (newValue) => {
    if (newValue === 'status' || newValue === 'priority' || newValue === 'user') {
      setGrouping(newValue);
    } else {
      console.error('Invalid grouping value provided:', newValue);
    }
  };

  const setOrderingValue = (newValue) => {
    if (newValue === 'Priority' || newValue === 'Title') {
      setOrder(newValue);
    } else {
      console.error('Invalid ordering value provided:', newValue);
    }
  };
  let content;

  if (Grouping === 'status') {
    content = <Status order={Order}  />;
  } else if (Grouping === 'priority') {
    content = <Priority order={Order} />;
  } else {
    content = <Byuser order={Order} />;
  }
  return (
    <div className='fullBody'>

      <Navbar order={Order} grouping={Grouping} setGroupingValue={setGroupingValue} setOrderingValue={setOrderingValue}></Navbar>
      {content}
      {/* <Router>
        <Navbar order={Order} grouping={Grouping}></Navbar>
        <Routes>


          <Route path='/' element={<Status />} />
          <Route path='/user' element={<Byuser />} />
          <Route path='/priority' element={<Priority />} />

        </Routes>
      </Router> */}

    </div>
  );
}

export default App;
