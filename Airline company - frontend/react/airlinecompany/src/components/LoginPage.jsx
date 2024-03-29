import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./css/LoginPage.css"

function LoginPage({ addToken, addUser }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  let navigate = useNavigate();

  function handleInput(e) {
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  }



  function handleLogin(e) {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/login", userData).then((res) => { //ovo mi nije radilo bez http iz nekog razloga
      console.log(res.data.logged_user);
      if (res.data.success === true) {
        window.sessionStorage.setItem("user", res.data.logged_user);
        window.sessionStorage.setItem("auth_token", res.data.access_token);
        addToken(res.data.access_token);
        addUser(res.data.logged_user);
        navigate("/");
      }
    })
      .catch((e) => {
        Swal.fire('Unable to login', '', 'error');
        console.log(e);
      });
  }
  return (
    <div>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 shadow-2-strong">
              <h2 className="text-center text-dark">Login Form</h2>
              <div className="text-center mb-5 text-dark">Airline company</div>
              <div className="login-body">
                <form
                  className="login-form py-5 cardbody-color p-lg-5"
                  onSubmit={handleLogin}
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
                      className="btn btn-primary btn-block"
                    >
                      Login
                    </button>
                  </div>
                  <div
                    id="emailHelp"
                    className="form-text text-center mb-5 text-dark"
                  >
                    <br></br>
                    Not Registered?{" "}
                    <a href="/register" className="text-dark fw-bold">
                      {" "}
                      Create an Account
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
