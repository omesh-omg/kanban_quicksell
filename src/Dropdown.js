import React from 'react';
import Button from './button.js'
import './Status.css'
import './Dropdown.css'
import optionsimg from './options.png'
import './Dropdown.css'
import dropdownimg from './dropdown.png'
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';

function Dropdown() {
  const navigate = useNavigate();
  const [groupBy, setgroupBy] = useState("Status");
  const [orderBy, setorderBy] = useState("Priority");
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    navigate('/'+event.target.value);
    // localStorage.clear();
    localStorage.setItem('grouping', `${event.target.value}`);
    
  };
  function onClickHandler() {
    console.log("hello");
    //set item();
  };
  const handleSelectChangeorder = (event) => {
    setSelectedValue(event.target.value);
    console.log(`${event.target.value}`);
    
    // localStorage.clear();
    localStorage.setItem('order', `${event.target.value}`);
    
  };
  return (
    <>
      <div className='dropdown'>
        <ul>Grouping <div>
          <select name="pets" id="pet-select" value={selectedValue} onChange={handleSelectChange} >
            <option value=""  >Status</option>
            <option value="priority" ><Link to="/priority">Priority</Link></option>
            <option value="user"><Link to="/byuser">User</Link></option>
          </select>
        </div>
        </ul>
        <ul>Ordering <div>
          <select name="pets" id="pet-select" value={selectedValue} onChange={handleSelectChangeorder} >

            <option value="Priority">Priority</option>
            <option value="Title">Title</option>
          </select>
        </div>
        </ul>
      </div>
      {/* <ddSelect>kyhjggljk</ddSelect> */}
      {/* <ddSelect></ddSelect> */}
      {/* <Select2></Select2> */}

    </>

  );
}

export default Dropdown;
