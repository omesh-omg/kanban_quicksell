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



const Priority = () => {
    // let todono = 0;
    const [todono, settodono] = useState();
    let usersdata = [''];
    const [tick, setTick] = useState([{ "id": "CAM" }]);
    const [users, setusers] = useState([{ "id": "CAM" }])
    const [nopriority, setnopriority] = useState([]);
    const [lowpriority, setlowpriority] = useState([]);
    const [hightpriority, sethightpriority] = useState([]);
    const [mediumpriority, setmediumpriority] = useState([]);
    const [urgent, seturgent] = useState([]);
    const [usermass, setusermass] = useState([]);
    const [Order, setOrder] = useState(localStorage.getItem('order'));
    // const [temp, settemp] = useState([]);

    // const [backlog, setbacklog] = useState([]);

    // const [count, setCount] = useState(0);
    // let todonum = 0;
    const [todonum, setTodonum] = useState(0);

    // const [first, setfirst] = useState(second)

    useEffect(() => {

        hello();
    }, []);

    useEffect(() => {
        // useridfunc();
        count();
    }, [tick,users])


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
        // let lowprioritypre=[];
        // let mediumprioritypre=[];
        // let hightprioritypre=[];
        // let urgetnpre=[];
        users.forEach((user) => {
            let temp = [];
            tick.forEach((ticket) => {
                
                if (ticket.userId === user.id) {

                    temp.push(ticket);
                }
            }

            )
            if(Order==="Title"){
                temp.sort((a, b) => a.title.localeCompare(b.title));
            
            }else{
                
                temp.sort((b, a) => parseInt(a.priority) - parseInt(b.priority));
           
            }
            // console.log("temp",temp);
            masspre.push(temp);
            // let xt=[];
            // settemp(xt);
        })

        setusermass(masspre);
        // console.log("lasfls");
        // console.table("usermass", usermass);

    }


    // let tempx = [];




    // count();





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
                                            return(
                                                <p className='cText' style={{ width: "500px" }}>{item.name}</p>
                                            )
                                        }
                                        return null;
                                        
                                    // ) : null;
                                })
                            }

                            {/* <p>{console.log(tempx[0])}</p> */}


                            {/* <p>{users[0].id}</p> */}
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
                                        (<Card ticket={ticket}></Card>)
                                    )
                                })
                            }
                        </div>

                    </div>
                );
            })}
            {/* //kjsahf */}
            
        </div>
    )
}

export default Priority