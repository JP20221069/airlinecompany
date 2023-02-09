import React from "react";
import { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  function handleInput(e) {
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  }

  function handleLogin() {
    axios.post("http://127.0.0.1:8000/api/login", userData).then((res) => {
        console.log(res.data);
    })
    .catch((e) => {
        console.log(e);
    });
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center text-dark mt-5">Login Form</h2>
            <div className="text-center mb-5 text-dark">Airline company</div>
            <div className="card my-5">
              <form
                className="card-body cardbody-color p-lg-5"
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
                    className="btn btn-color px-5 mb-5 w-100"
                  >
                    Login
                  </button>
                </div>
                <div
                  id="emailHelp"
                  className="form-text text-center mb-5 text-dark"
                >
                  Not Registered?{" "}
                  <a href="#" className="text-dark fw-bold">
                    {" "}
                    Create an Account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
