import React, { Fragment } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Profile({ user, token, addReservations }) {

  console.log(user.name + " PROFILE");

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

  return (
    <div>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">{user.name}</span>
              <span className="text-black-50">{user.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">My Profile</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    value={user.name}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.lastname}
                    placeholder="surname"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email"
                    value={user.email}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Date of birth</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter date of birth"
                    value={user.DOB}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter username"
                    value={user.username}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="******"
                    value={user.password}
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Save Profile
                </button>
              </div>
              <div className="mt-5 text-center">
                <Link
                  onClick={getReservations}
                  className="btn btn-primary profile-button"
                  type="button"
                  to = "/myreservations"
                >
                  My Reservations
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
