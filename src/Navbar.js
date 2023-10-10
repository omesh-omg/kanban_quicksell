import React, { useEffect, useRef, useState } from 'react';
import Button from './button.js'
import './Status.css'
import optionsimg from './options.png'
import Dropdown from './Dropdown.js'
import './Dropdown.css'
import dropdownimg from './dropdown.png'
// useRef
// import { useState } from 'react';

function Navbar( props) {
  const [Opendrop, setOpendrop] = useState(false);
  // const [omesh, setOmesh] = useState(0);
  const dropdownButtonRef = useRef(null);

    function onClickHandler(){
      console.log("hello");
      setOpendrop(!Opendrop);
    };

    const closeDropdown = (event) => {
      if (Opendrop && !dropdownButtonRef.current.contains(event.target)) {
        setOpendrop(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', closeDropdown);
      return () => {
        document.removeEventListener('mousedown', closeDropdown);
      };
    }, [Opendrop]);
  
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
        
        <div className='topBar' onClick={onClickHandler}>

          <img src={optionsimg} className='optionsImg' alt=''></img>

          <button className='button' >Display</button>  

          <img src={dropdownimg} className='optionsImg2' alt=''></img>        
          

        </div>
        {Opendrop && <div ref={dropdownButtonRef} >
            <Dropdown order={props.order} grouping={props.grouping} setGroupingValue={props.setGroupingValue} setOrderingValue={props.setOrderingValue}/>
            </div>} 
      </div>
        
    );
}

export default Navbar;