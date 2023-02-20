import React, { Fragment } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Profile({ user, token, addReservations }) {

  console.log(user.name + " PROFILE");

  const [userData, setUserData] = useState({
    username: user.username,
    password: user.password,
    name: user.name,
    lastname: user.lastname,
    DOB: user.DOB,
    email: user.email
  });

  function handleInput(e) {
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
    console.log(newUserData)
  }

  function getReservations() {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:8000/api/myreservations",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        addReservations(response.data.reservations);
        console.log(response.data.reservations);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function editUser(e) {
    var config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8000/api/editprofile',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    e.preventDefault();
    axios.put("http://127.0.0.1:8000/api/editprofile", userData, config).then((res) => { //ovo mi nije radilo bez http iz nekog razloga
      console.log(res.data);
    })
      .catch((e) => {
        console.log(e);
      });
  };

  // axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // }

  return (
    <div>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://cdn-icons-png.flaticon.com/512/1202/1202380.png?w=1380&t=st=1676896127~exp=1676896727~hmac=58482766eb4204e74d17927e32b3469b111b7068e906db5c15a8aeb52be834d4"
              />
              <span className="font-weight-bold">{user.name}</span>
              <span className="text-black-50">{user.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <form onSubmit={editUser}>
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">My Profile</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder={user.name}
                      className="form-control"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Surname</label>
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      placeholder={user.lastname}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Date of birth</label>
                    <input
                      type="text"
                      name="DOB"
                      className="form-control"
                      placeholder={user.DOB}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Username</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder={user.password}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <br></br>
                <div className="row icon-boxes justify-content-center">
                  <button
                    className="btn btn-outline-secondary"
                    type="submit"
                  >
                    Save Profile
                  </button>
                </div>
                <br></br>

              </div>
            </form>
            <div className="row icon-boxes justify-content-center">
              <Link
                onClick={getReservations}
                className="btn btn-outline-secondary"
                type="button"
                to="/myreservations"
              >
                My Reservations
              </Link>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
