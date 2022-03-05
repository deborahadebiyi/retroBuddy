import React from 'react';
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Profile from "../pages/profile/Profile";
import Retro from '../pages/retro/Retro';
import Logout from '../pages/logout/Logout';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/auth/register" element={<Register/>}/>
        <Route exact path="/auth/login" element={<Login/>}/> 
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/notes/retrospective" element={<Retro/>}/>
        <Route exact path="/auth/logout" element={<Logout/>}/>
      </Routes>
    </Router>
  );
}

export default App;
