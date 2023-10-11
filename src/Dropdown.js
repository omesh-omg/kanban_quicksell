import React from 'react';
import Button from './button.js'
import './Status.css'
import './Dropdown.css'
import optionsimg from './options.png'
import './Dropdown.css'
import dropdownimg from './dropdown.png'
import { useState } from 'react';
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';

function Dropdown(props) {
  // const navigate = useNavigate();
  // const [groupBy, setgroupBy] = useState("Status");
  // const [orderBy, setorderBy] = useState("Priority");
  const [selectedValue, setSelectedValue] = useState(localStorage.getItem('grouping'));
  const [selectedValueorder, setSelectedValueorder] = useState(localStorage.getItem('order'));

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    // navigate('/'+event.target.value);
    // localStorage.clear();
    props.setGroupingValue(`${event.target.value}`);
    localStorage.setItem('grouping', `${event.target.value}`);
    
  };
  function onClickHandler() {
    console.log("hello");
    //set item();
  };
  const handleSelectChangeorder = (event) => {
    setSelectedValueorder(event.target.value);
    console.log(`${event.target.value}`);
    props.setOrderingValue(`${event.target.value}`);
    // setorderBy(event.target.value);
    // localStorage.clear();
    localStorage.setItem('order', `${event.target.value}`);
    
  };

  return (
    <>
      <div className='dropdown'>
        <ul>Grouping <div>
          <select name="grouping"  value={selectedValue} onChange={handleSelectChange} >
            <option value="status"  >Status</option>
            <option value="priority" >Priority</option>
            <option value="user">User</option>
          </select>
        </div>
        </ul>
        <ul>Ordering<div>
            <select name="ordering"  value={selectedValueorder} onChange={handleSelectChangeorder} >
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
