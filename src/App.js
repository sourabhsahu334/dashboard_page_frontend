

// in src/App.js
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './component/dashboard';
import Sidebar from "./component/Sidebar";
import Table from "./component/Tables";
import Search from "./component/Search";
import {React,BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"

import { PostList } from './posts';
import Contact from "./Contact";
import Chat from "./Chat";


const App = () => (
    
    <div>
            
      <Router>
      <Link  to="/contact"><button>contact</button> </Link>
      <Link to ="/chat"><button>chat</button></Link>
       <Routes>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path ="/chat" element={<Chat/>}/>
     </Routes>
     </Router>
    </div>
    
);

export default App;
