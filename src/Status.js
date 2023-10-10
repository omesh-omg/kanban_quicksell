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
import { useNavigate } from 'react-router-dom';

const Status = () => {
    const navigate = useNavigate();
    const [pref, setpref] = useState(localStorage.getItem('grouping'))
    if (pref === 'user') {
        navigate('/user');
    }
    if (pref === 'priority') {
        navigate('/priority');
    }
    // let todono = 0;
    const [todono, settodono] = useState([]);
    let usersdata = [''];
    const [tick, setTick] = useState([]);
    const [todolist, settodolist] = useState([]);
    const [inProgressno, setinProgressno] = useState([]);
    const [doneno, setdoneno] = useState([]);
    const [cancelled, setcancelled] = useState([]);
    const [backlog, setbacklog] = useState([]);
    const [Order, setOrder] = useState(localStorage.getItem('order'));

    // const [count, setCount] = useState(0);
    // let todonum = 0;
    const [todonum, setTodonum] = useState([]);

    // const [first, setfirst] = useState(second)

    useEffect(() => {

        hello();
        // count();


    }, []);

    useEffect(() => {
        count();
        // Order();
        // console.log("inprogress", todono);
    }, [tick,Order]);

    useEffect(() => {
        setOrder(localStorage.getItem('order'));
      
    }, [localStorage.getItem('order')])
    


    async function hello() {
        try {
            const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");

            const result = await response.json();


            setTick(result.tickets);

            // console.log("tickets", tick);


            // settodolist( tick.filter((ele) => ele.status === 'Todo')) ;
            // setTimeout(() => {

            // }, 2000);

            // // setTodonum((prevTodonum) => {
            // //     const todolist = tick.filter((ele) => ele.status === 'Todo');
            // //     console.log(todolist.length); // Now this will give you the expected result
            // //     return todolist.length; // Return the new value for todonum
            // //   });
            // //   console.log(todolist.length);

            // //     console.log(todolist);
            // console.log(todolist.length);
            // // todonum = todolist.length;
            // setTodonum(todolist.length);
            // console.log(todonum);

        } catch (error) {
            console.error("Error:", error);
        }


    }


    function count() {
        let todopre = [];
        let donepre = [];
        let cancelledpre = [];
        let backlogpre = [];
        let inprogresspre = [];
        // console.log("order",Order);

        tick.map((ticket) => {
            // if (ticket.status === "Todo") {
            //     settodono(todono + 1)
            //     console.log("smd")
            // }
            if (ticket.status === "Todo") todopre.push(ticket);
            if (ticket.status === "Done") donepre.push(ticket);
            if (ticket.status === "cancelled") cancelledpre.push(ticket);
            if (ticket.status === "Backlog") backlogpre.push(ticket);
            if (ticket.status === "In progress") inprogresspre.push(ticket);

            // console.log("todo", todono);
            
        }

        )
        // const sortedPlayers = [...players].sort((a, b) => parseInt(a.age) - parseInt(b.age));
        // const sortedPlayers1 = [...players].sort((a, b) => a.name.localeCompare(b.name));
        if(Order==="Title"){
            todopre.sort((a, b) => a.title.localeCompare(b.title));
        inprogresspre.sort((a, b) => a.title.localeCompare(b.title));
        backlogpre.sort((a, b) => a.title.localeCompare(b.title));
        donepre.sort((a, b) => a.title.localeCompare(b.title));
        cancelledpre.sort((a, b) => a.title.localeCompare(b.title));
        }else  {
            
            todopre.sort((b, a) => parseInt(a.priority) - parseInt(b.priority));
        inprogresspre.sort((b, a) => parseInt(a.priority) - parseInt(b.priority));
        backlogpre.sort((b, a) => parseInt(a.priority) - parseInt(b.priority));
        donepre.sort((b, a) => parseInt(a.priority) - parseInt(b.priority));
        cancelledpre.sort((b, a) => parseInt(a.priority) - parseInt(b.priority));
        }
        
        // console.clear();
        // console.log("todo",temptodo);

        setTodonum(todopre);
        setbacklog(backlogpre);
        setcancelled(cancelledpre);
        setdoneno(donepre);
        setinProgressno(inprogresspre);
        // console.log("order",Order);
        // console.log("backlog",backlog);

    }




    // count();





    return (
        <div className='Boards'>
            <div className='Board'>
                <div className='boardHeading'>
                    <img src={backlogimg} className='headingImg' alt=''></img>
                    <p className='cText'>Backlog</p>
                    <p className='cText'>{backlog.length}</p>
                    <div className='boardHeading' id='pluske'>

                        <img src={plusmore} className='headingImg' alt=''></img>
                    </div>


                </div>

                <div className='Cards'>

                    {
                        backlog.length > 0 &&
                        backlog.map((ticket) => {
                            return (
                                (ticket && <Card ticket={ticket}></Card>)
                            )
                        })
                    }
                </div>

            </div>
            <div className='Board'>
                <div className='boardHeading'>
                    <img src={todo} className='headingImg' alt=''></img>
                    <p className='cText'>Todo</p>
                    <p className='cText'>{todonum.length}</p>
                    <div className='boardHeading' id='pluske'>

                        <img src={plusmore} className='headingImg' alt=''></img>
                    </div>


                </div>

                <div className='Cards'>

                    {
                        todonum.length > 0 &&
                        todonum.map((ticket) => {
                            // { ticket.status === "Todo" && (settodono(todono + 1)) }
                            // if(ticket.status === "Todo"){
                            //     settodono(todono+1)
                            // }
                            // console.log(todono)

                            return (
                                (ticket.status === "Todo" && <Card ticket={ticket}></Card>)
                            )
                        })
                    }
                </div>

            </div>
            <div className='Board'>
                <div className='boardHeading'>
                    {/* <div style={{display: "flex", flexDirection: "row", gap: "12px"}}> */}
                    <img src={inprogressimg} className='headingImg' alt=''></img>
                    <p className='cText' style={{ width: "190px" }}>In-Progress</p>
                    <p className='cText'>{inProgressno.length}</p>

                    {/* </div> */}
                    <div className='boardHeading' id='pluske'>

                        <img src={plusmore} className='headingImg' alt=''></img>
                    </div>

                </div>

                <div className='Cards'>

                    {
                        inProgressno.length > 0 &&
                        inProgressno.map((ticket) => {
                            return (
                                (ticket.status === "In progress" && <Card ticket={ticket}></Card>)
                            )
                        })
                    }
                </div>

            </div>
            <div className='Board'>
                <div className='boardHeading'>
                    <img src={done} className='headingImg' alt=''></img>
                    <p className='cText'>Done</p>
                    <p className='cText'>{doneno.length}</p>
                    <div className='boardHeading' id='pluske'>

                        <img src={plusmore} className='headingImg' alt=''></img>
                    </div>


                </div>

                <div className='Cards'>

                    {
                        doneno.length > 0 &&
                        doneno.map((ticket) => {
                            return (
                                (ticket.status === "Done" && <Card ticket={ticket}></Card>)
                            )
                        })
                    }
                </div>

            </div>
            <div className='Board'>
                <div className='boardHeading'>
                    <img src={Cancelled} className='headingImg' alt=''></img>
                    <p className='cText'>Canceled</p>
                    <p className='cText'>{cancelled.length}</p>
                    <div className='boardHeading' id='pluske'>

                        <img src={plusmore} className='headingImg' alt=''></img>
                    </div>


                </div>

                <div className='Cards'>

                    {
                        cancelled.length > 0 &&
                        cancelled.map((ticket) => {
                            return (
                                (ticket.status === "Canceled" && <Card ticket={cancelled}></Card>)
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Status