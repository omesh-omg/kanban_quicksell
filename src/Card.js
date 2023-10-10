import React, { useState } from 'react';
import './Card.css';
import logo from './logo.svg';
import usr1 from './usr1.png'
import priority from './priority.svg';
import tag from './tag.png'
// import img from 

const Card = (props) => {
    // let available = true;
    const [available, setavailable] = useState(true);
    // console.log({props});

    return (
        <div className='cardBox'>
            <div className='cardBoxrow'>
                <div className='cardBoxin'>
                    <text className='cardId'>{props.ticket.id}</text>
                    <text className='cardTitle'>{props.ticket.title}</text>
                </div >
                <div style={{ height: "38px" }}>
                    <img className='userImg' src={usr1} alt='' />
                    {available && <div className='availableUser' />}
                </div>
            </div>


            <div className='lowerBox'>
                <div className='priorityBox'><img className='priorityImg' src={priority} alt='logo' /></div>

                <div className='tagBox'>
                    <img className='tagImg' src={tag} alt='logo' />
                    <tag className='tagText'>Feature Request</tag>
                </div>

            </div>
        </div>
    );
};

export default Card;