import React, { useState } from 'react';

import './Book.css';


function Bookpage(){
    const[firstname,setFirstname]=useState('');
    const[lastname,setLastname]=useState('');
    const[number,setNumber]=useState('');
    const[email,setEmail]=useState('');
    


    const handleFirstname=(e)=>{
        setFirstname(e.target.value)
    }
    const handleLastname=(e)=>{
        setLastname(e.target.value)
    }
    const handleNumber=(e)=>{
        setNumber(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
   

    const handlesubmit=()=>{
        if(firstname.length <6){
            alert('Name must be taken atleast 6 Characters')
        }
        else if(lastname.length <6){
            alert('Name must be taken atleast 6 Characters')
        }
        else if(number.length <10){
            alert('Mobile Number must be taken atleast 10 Numbers')
        }
        else if(email.length <8){
            alert('Email must be taken atleast 8 Characters')
        }
        else{
            alert("Your Ticket is Booking Successfully")
        }
    }
    return(
        <div className="form">
            <h1>Booking Form</h1>
            <form onSubmit={handlesubmit}>
                <input value={firstname} required type='text' placeholder="First Name" onChange={handleFirstname}/><br/><br/><br/>
                <input value={lastname} required type='text' placeholder="Last Name" onChange={handleLastname}/><br/><br/><br/>
                <input value={number} required type='number' onChange={handleNumber} placeholder='MobileNumber'/><br/><br/><br/>
                <input value={email} required type='email' placeholder="Email" onChange={handleEmail}/><br/><br/><br/>
                <input type='submit' value='Submit' id="button"/>
            </form>
            <footer className='book'>
                <h2>Jafar Tour and Travels<span>Mob.No:+91 9963226199 & +91 6309375396</span></h2>
            </footer>
        </div>
    )
}
export default Bookpage;
