

// in src/App.js
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './component/dashboard';
import Sidebar from "./component/Sidebar";
import Table from "./component/Tables";
import Search from "./component/Search";
import {Router,Route,Link} from "react-router-dom"

import { PostList } from './posts';


const App = () => (
    
    <div>
      
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr',paddingTop:'10px' }}>
       <Sidebar/>
       <Table/>
    
    </div>
    </div>
    
);

export default App;
