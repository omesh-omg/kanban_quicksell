import React, { useEffect, useState } from 'react';
import './Card.css';
import logo from './logo.svg';
import usr1 from './usr1.png'
import priority from './priority.svg';
import tag from './tag.png'
import img0 from './nopriority.png'
import img4 from './urgent.png'
import img3 from './high.png'
import img2 from './medium.png'
import img1 from './low.png'

// import img from 

const Card = (props) => {
    // let available = true;
    const [available, setavailable] = useState(true);
    // console.log({props});
    let imgt=`imgr${props.ticket.priority.toString()}`;
    // console.log(imgt);
    let dotuser;

    const priorityImageMap = {
        0: img0,
        1: img1,
        2: img2,
        3: img3,
        4: img4,
      };
    
      
      const imgSrc = priorityImageMap[props.ticket.priority] || img0;
    if(props.available===true){
        dotuser=<div className='availableUser' />;

    }else{
        dotuser=<div className='notavailableUser' />;
    }
   
    

    return (
        <div className='cardBox'>
            <div className='cardBoxrow'>
                <div className='cardBoxin'>
                    <text className='cardId'>{props.ticket.id}</text>
                    <text className='cardTitle'>{props.ticket.title}</text>
                </div >
                <div style={{ height: "38px" }}>
                    <img className='userImg' src={usr1} alt='' />
                    {dotuser}
                </div>
            </div>


            <div className='lowerBox'>
                <div className='priorityBox'><img className='priorityImg' src={imgSrc} alt='logo' /></div>

                <div className='tagBox'>
                    <img className='tagImg' src={tag} alt='logo' />
                    <tag className='tagText'>{props.ticket.tag}</tag>
                </div>

            </div>
        </div>
    );
};

export default Card;