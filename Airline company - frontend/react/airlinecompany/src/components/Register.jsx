import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Register() {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
        name: "",
        surname: "",
        birthday: ""
      });
    
      let navigate = useNavigate();

      function handleInput(e) {
        let newUserData = userData;
        newUserData[e.target.name] = e.target.value;
        setUserData(newUserData);
      }
    
      function handleRegister(e) {
        e.preventDefault();
        axios.post("api/register", userData).then((res) => {
            console.log(res.data);
            navigate("/login");
        })
        .catch((e) => {
            console.log(e);
        });
      }
    
  return (
    <div><div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Registration Form</h2>
          <div className="text-center mb-5 text-dark">Airline company</div>
          <div className="card my-5">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={handleRegister}
            >
              <div className="text-center">
                <img
                  src="https://img.freepik.com/free-photo/top-view-white-toy-plane-map_23-2148666303.jpg?w=996&t=st=1675945381~exp=1675945981~hmac=6a9bef8d413742d5468b2a06adbff42531feced6d6362aaa1ea30cf4bf724be7"
                  width="300px"
                  alt="profile"
                />
              </div>
              <br></br>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  name="name"
                  onInput={handleInput}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Surname"
                  aria-describedby="emailHelp"
                  placeholder="Surname"
                  name="surname"
                  onInput={handleInput}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  name="email"
                  onInput={handleInput}
                />
              </div>
              <div className="mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="Birthday"
                  aria-describedby="emailHelp"
                  placeholder="Birthday"
                  name="birthday"
                  onInput={handleInput}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="User Name"
                  name="username"
                  onInput={handleInput}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  name="password"
                  onInput={handleInput}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-color px-5 mb-5 w-100"
                >
                  Register
                </button>
              </div>
              <div
                id="emailHelp"
                className="form-text text-center mb-5 text-dark"
              >
                Have an account?{" "}
                <a href="#" className="text-dark fw-bold">
                  {" "}
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Register