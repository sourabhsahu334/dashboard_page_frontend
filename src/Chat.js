import React from 'react'
import UserList from "./component/userList";
import ChatPage from "./component/ChatPage";
import Search from './component/Search';
import Sidebar from './component/Sidebar';

const Chat = () => {
  return (
    <div>
      <Search/>
          <div style={{ display: 'flex', flexDirection: 'row',paddingTop:'10px' }}>
          <Sidebar/>
      <UserList/>
      <ChatPage/>

    
    </div>
    </div>
  )
}

export default Chat