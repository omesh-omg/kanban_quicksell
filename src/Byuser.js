import React from 'react'
import todo from './to do.png'
import { useEffect, useState } from 'react';
import Card from './Card.js'
import './Status.css'
import plusmore from './plusmore.png'
import done from './Done.png'
import Cancelled from './canceled.png'
import backlogimg from './backlog.png'
import inprogressimg from './in progress.png'
import nopriorityimg from './nopriority.png'
import urgentimg from './urgent.png'
import highimg from './high.png'
import mediumimg from './medium.png'
import lowimg from './low.png'
import usr1 from './usr1.png'



const Byuser = (props) => {
    // let todono = 0;
    const [todono, settodono] = useState();
    let usersdata = [''];
    let available=true;
    const [tick, setTick] = useState([{ "id": "CAM" }]);
    const [users, setusers] = useState([{ "id": "CAM" }])
  
    const [usermass, setusermass] = useState([]);
    const [Order, setOrder] = useState(localStorage.getItem('order')); 

    useEffect(() => {

        hello();
    }, []);

    useEffect(() => {
        // useridfunc();
        count();
    }, [tick,users,props.order])


    async function hello() {
        try {
            const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");

            const result = await response.json();


            setTick(result.tickets);
            setusers(result.users);


            // console.log("tickets", users);

        } catch (error) {
            console.error("Error:", error);
        }


    }

    function count() {
        let masspre = [];
        users.forEach((user) => {
            let temp = [];
            tick.forEach((ticket) => {
                
                if (ticket.userId === user.id) {

                    temp.push(ticket);
                }
            }

            )
            if(props.order==="Title"){
                temp.sort((a, b) => a.title.localeCompare(b.title));
            
            }else{
                
                temp.sort((b, a) => parseInt(a.priority) - parseInt(b.priority));
           
            }
            
            masspre.push(temp);
           
        })

        setusermass(masspre);
        
        console.log("hello this is by user");
        
    }

  return (
        <div className='Boards'>
            {usermass.map((user) => {
                return (
                    <div className='Board'>
                        <div className='boardHeading'>
                            <img src={usr1} className='headingImg' alt=''></img>
                            {
                                // console.log("isko dekho",user)
                                
                                users.map((item) => {
                                    // return item.id === user[0].userId ? (
                                        // let usex=user[0];
                                        if(
                                            user[0] &&
                                             item.id === user[0].userId){
                                                available=item.available;
                                            return(
                                                <p className='cText' style={{ width: "500px" }}>{item.name}</p>
                                            )
                                        }
                                        return null;
                                        
                                    // ) : null;
                                })
                            }
                            <p className='cText'>{user.length}</p>
                            <div className='boardHeading' id='pluske'>

                                <img src={plusmore} className='headingImg' alt=''></img>
                            </div>


                        </div>

                        <div className='Cards'>

                            {
                                user.length > 0 &&
                                user.map((ticket) => {
                                    return (
                                        (<Card ticket={ticket} available={available}></Card>)
                                    )
                                })
                            }
                        </div>

                    </div>
                );
            })}
            </div>
    )
}

export default Byuser