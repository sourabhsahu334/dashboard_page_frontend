import React from 'react';
import { FaHome, FaTasks, FaEnvelope, FaAddressBook, FaComments, FaMoneyBillAlt, FaCog } from 'react-icons/fa';
import Search from './Search';
import "../App.css";
import logo from "./download (4).png"

const Sidebar = () => {
 const [isButton,setButton]=React.useState(true);
const setButtonChange=()=>{
  setButton(!isButton);
}

const users=[
    {
        image:"./download (4).png",
        name:"sourabh sahu",
        email:"sourabhsahu334@email.com"
    },
    {
        image:"null",
        name:"priyanshu",
        email:"priyanshu334@gmail.com"
    },
    {
        image:"null",
        name:"johndsss",
        email:"johnss334@emial.com"
    },
    {
        image:"null",
        name:"keshav upadhyay"
        ,email:"keshav234@gmail.com"
    },
    {
        image:"null",
        name:"priyanshu",
        email:"priyanshu334@gmail.com"
    },
    {
        image:"null",
        name:"johndsss",
        email:"johnss334@emial.com"
    },
    {
        image:"null",
        name:"keshav upadhyay",
        email:"keshav234@gmail.com"
    }
]
  return (
    <div>
         

    <div style={{marginTop:"34px",width:isButton?"250px":0,paddingLeft:"30px",height:"700px",overflow:'hidden'}} className="sidebar">
    
      <div className="sidebar-nav">
    
        {users
          &&
          users.map((user)=>(
           <div>
            <div style={{paddingBottom:"10px",paddingTop:"10px",}}><a href="#"></a><button style={{borderBlock:'12px',borderRadius:"20px",width:"40px",height:"40px",marginRight:"20px"}}><img style={{width:"20px"}}src={logo} alt='null'/></button>{user.name}</div>
           </div>
          ))

          }
      </div>
     
    </div>
    </div>
  );
};

export default Sidebar;
