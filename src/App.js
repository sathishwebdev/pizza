import './App.css';
// import * as ICons from '@mui/icons-material'
import {BrowserRouter as Router, Outlet} from 'react-router-dom'
import RouteConfig from './routeconfig';
import { Protector } from './helpers';
import NavBar from './nav';

export const baseUrl = process.env.REACT_APP_API_BASE_URL


function App() {


  return (
    <Protector>
      
      <Router>
        <NavBar/>
        <div style={{marginTop:"100px"}}>
          <RouteConfig /> 
        </div>
      </Router>
      <Outlet />
    </Protector>
  );
}

export default App;


