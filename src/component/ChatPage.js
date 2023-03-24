import React from 'react'
import Search from './Search'
const ChatPage = () => {
    const count=[1,2,3,];
  return (
    <div>
        <div style={{marginTop:"30px",paddingTop:"20px",borderRadius:"20px",width:'700px',backgroundColor:"wheat",height:"700px",opacity:1.3}}>
         <div style={{width:"100px",background:"linear-gradient(wheat,white)",marginBottom:"10px"}}>sourabh sahu</div>
       
        {
            count&& count.map((c)=>(
            <div style={{borderRadius:"12px",width:"53%",height:'20%',backgroundColor:"white",marginBottom:"20px",marginLeft:c%2==0?"40%":"10px"}}></div>
            ))
        }
      
        </div>

    </div>
  )
}

export default ChatPage