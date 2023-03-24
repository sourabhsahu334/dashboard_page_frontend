import React from 'react';
import { FaHome, FaTasks, FaEnvelope, FaAddressBook, FaComments, FaMoneyBillAlt, FaCog } from 'react-icons/fa';
import {Link} from "react-router-dom"
import "../App.css";
import Search from './Search';
const Sidebar = () => {
 const [isButton,setButton]=React.useState(true);
const setButtonChange=()=>{
  setButton(!isButton);
}
  return (
    <div>
    
      <button style={{width:"50px",marginBottom:"10px"}}  onClick={setButtonChange}>{isButton?'close':'open'}</button>
    <div style={{width:isButton?"250px":0,paddingLeft:"30px",height:"700px",overflow:'hidden'}} className="sidebar">
    
      <div className="sidebar-nav">
        <div><button style={{borderRadius:"50px" ,width:"40px",height:'40px'}}>s</button><span style={{paddingLeft:"12px"}}>sourabh sahu</span></div>
        <div style={{paddingBottom:"30px"}}>sourabhsahu@email.acom</div>
        <ul>
          <li>
            <a href="#">
              <FaHome />
              <span style={{}}>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaTasks />
              <span>Tasks</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaEnvelope />
              <span>Email</span>
            </a>
          </li>
          <li>
            <a >
              <FaAddressBook />
              <Link to ="/contact"> <span>contact</span></Link>
            </a>
          </li>
          <li>
            <a >
              <FaComments />
             <Link to ="/chat"> <span>Chat</span></Link>
            </a>
          </li>
          <li>
            <a href="#">
              <FaMoneyBillAlt />
              <span>Deals</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaCog />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
     
    </div>
    </div>
  );
};

export default Sidebar;
