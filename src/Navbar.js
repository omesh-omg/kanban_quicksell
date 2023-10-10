import React, { useEffect, useState } from 'react';
import Button from './button.js'
import './Status.css'
import optionsimg from './options.png'
import Dropdown from './Dropdown.js'
import './Dropdown.css'
import dropdownimg from './dropdown.png'
// import { useState } from 'react';

function Navbar() {
  const [Opendrop, setOpendrop] = useState(false);
  // const [omesh, setOmesh] = useState(0);

    function onClickHandler(){
      console.log("hello");
      setOpendrop(!Opendrop);
    };


    // useEffect(() => {
    //   const closeDropdown = (event) => {
    //     if (Opendrop && !event.target.closest('.dropdown-container')) {
    //       // Click occurred outside the dropdown, so close it
    //       setOpendrop(false);
    //     }
    //   };
  
    //   document.addEventListener('mousedown', closeDropdown);
  
    //   return () => {
    //     document.removeEventListener('mousedown', closeDropdown);
    //   };
    // }, [Opendrop]);


    return (
      <div className='randombar'>
        
        <div className='topBar'>

          <img src={optionsimg} className='optionsImg' alt=''></img>

          <button className='button' onClick={onClickHandler}>Display</button>  

          <img src={dropdownimg} className='optionsImg' alt=''></img>        
          {Opendrop && <Dropdown/> } 

        </div>
      </div>
        
    );
}

export default Navbar;