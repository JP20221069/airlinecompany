import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AdminPage from "./components/AdminPage";
import { useState } from "react";
import OffersPage from "./components/OffersPage";
import Profile from "./components/Profile";
import axios from "axios";
import MyReservations from "./components/MyReservations";
import Map from "./components/Map";

function App() {
  const [token, setToken] = useState();

  const [user, setUser] = useState({});

  const [reservations, setReservations] = useState([]);

  function addToken(auth_token){
    setToken(auth_token);
  }

  function addUser(user){
    setUser(user);
    console.log(user);
  }

  function addReservations(reservations){
    setReservations(reservations);
    console.log(reservations);
  }
  
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/login" element={<LoginPage addToken={addToken} addUser={addUser}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<NavBar token={token} user={user}/>}>
          <Route path="offers" element={<OffersPage token={token} user={user}/>}/>
          <Route path="home" element={<HomePage token={token} user={user}/>}/>
          <Route path="profile" element={<Profile token={token} user={user} addReservations={addReservations}/>}/>
          <Route path="myreservations" element={<MyReservations token={token} user={user} reservations={reservations}/>}/>
          <Route path="admin" element={<AdminPage user={user} token={token}/>}/>
          <Route path="map" element={<Map/>}/>
          

        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
