import React from 'react'
import Search from "./Search";
import { DiGithub } from "react-icons/di";

const Tables = () => {
  return (
    
   <div>
    <Search/>
     <div style={{paddingLeft:"10px"}} className="sidebar-table">
    <table>
      <thead>
        <tr>
          <th></th>
          <th style={{color: "rgba(0, 0, 0, 0.5)"}}>Name</th>
          <th style={{color: "rgba(0, 0, 0, 0.5)"}}>Email</th>
          <th style={{color: "rgba(0, 0, 0, 0.5)"}}>Company Name</th>
          <th style={{color: "rgba(0, 0, 0, 0.5)"}}>Role</th>
          <th style={{color: "rgba(0, 0, 0, 0.5)"}}>Forecast</th>
          <th style={{color: "rgba(0, 0, 0, 0.5)"}}>Recent Activity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" /></td>
          <td><DiGithub style={{fontSize:"30px"}}/>John Doe</td>
          <td>john@example.com</td>
          <td>Acme Inc.</td>
          <td>Manager</td>
          <td>$1000</td>
          <td>2 days ago</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td><DiGithub style={{fontSize:"30px"}}/>Jane Smith</td>
          <td>jane@example.com</td>
          <td>Widgets Ltd.</td>
          <td>Developer</td>
          <td>$500</td>
          <td>1 week ago</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td><DiGithub style={{fontSize:"30px"}}/>John Doe</td>
          <td>john@example.com</td>
          <td>Acme Inc.</td>
          <td>Manager</td>
          <td>$1000</td>
          <td>2 days ago</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td><DiGithub style={{fontSize:"30px"}}/>John Doe</td>
          <td>john@example.com</td>
          <td>Acme Inc.</td>
          <td>Manager</td>
          <td>$1000</td>
          <td>2 days ago</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td><DiGithub style={{fontSize:"30px"}}/>John Doe</td>
          <td>john@example.com</td>
          <td>Acme Inc.</td>
          <td>Manager</td>
          <td>$1000</td>
          <td>2 days ago</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td><DiGithub style={{fontSize:"30px"}}/>John Doe</td>
          <td>john@example.com</td>
          <td>Acme Inc.</td>
          <td>Manager</td>
          <td>$1000</td>
          <td>2 days ago</td>
        </tr>
        {/* more rows here */}
      </tbody>
    </table>
  </div>
   </div>
  )
}

export default Tables