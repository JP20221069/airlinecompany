import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  //neke promenljive su drugacije nazvane
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    name: "",
    lastname: "",
    DOB: "",
  });

  let navigate = useNavigate();

  function handleInput(e) {
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  }

  function handleRegister(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/register", userData)
      .then((res) => {
        //ovo mi nije radilo bez http iz nekog razloga
        if (res.data.success == true) {
          console.log(res.data);
          Swal.fire("User registered successfully", "", "success");
          navigate("/login");
        } else {
          Swal.fire("Cannot register user", "", "error");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 shadow-2-strong">
            <h2 className="text-center text-dark mt-5">Registration Form</h2>
            <div className="text-center mb-5 text-dark">Airline company</div>
            <form
              className="login-form py-5 cardbody-color p-lg-5"
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
                  id="Lastname"
                  aria-describedby="emailHelp"
                  placeholder="Lastname"
                  name="lastname"
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
                  id="DOB"
                  aria-describedby="emailHelp"
                  placeholder="DOB"
                  name="DOB"
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
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </div>
              <br></br>
              <div
                id="emailHelp"
                className="form-text text-center text-dark"
              >
                Have an account?{" "}
                <a href="/login" className="text-dark fw-bold">
                  {" "}
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
