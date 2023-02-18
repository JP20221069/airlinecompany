import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import { useState } from "react";
import OffersPage from "./components/OffersPage";
import Profile from "./components/Profile";

function App() {
  const [token, setToken] = useState();

  const [user, setUser] = useState({});


  function addToken(auth_token){
    setToken(auth_token);
  }

  function addUser(user){
    setUser(user);
  }

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/login" element={<LoginPage addToken={addToken} addUser={addUser}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<NavBar token={token} user={user}/>}>
          <Route path="offers" element={<OffersPage token={token}/>}/>
          <Route path="home" element={<HomePage token={token}/>}/>
          <Route path="profile" element={<Profile token={token}/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
