import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState } from "react";
import OffersPage from "./components/OffersPage";

function App() {
  const [token, setToken] = useState();

  function addToken(auth_token){
    setToken(auth_token);
  }

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/login" element={<LoginPage addToken={addToken}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<NavBar token={token}/>}>
          <Route path="offers" element={<OffersPage/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
