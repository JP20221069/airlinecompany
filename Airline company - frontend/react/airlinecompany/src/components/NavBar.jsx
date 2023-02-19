import React from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar({ token, user }) {

  console.log(user);
  function handleLogout() {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:8000/api/logoff",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              JettAirways
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/home">
                    Home Page
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/offers">
                    Offers
                  </Link>
                </li>
                {token == null ? (
                  <></>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link active" to="/profile">
                      Profile
                    </Link>
                  </li>
                )}
                {token == null ? (
                  <></>
                ) : (
                  user.role_id == 2 ? (
                  <li className="nav-item">
                    <Link className="nav-link active" to="/admin">
                      Admin Page
                    </Link>
                  </li>
                  ) :
                  <></>
                )}

                <li className="nav-item">
                  {token == null ? (
                    <Link className="nav-link active" to="/login">
                      Login
                    </Link>
                  ) : (
                    <a
                      className="nav-link active"
                      href="/"
                      onSubmit={handleLogout}
                    >
                      Logout
                    </a>
                  )}
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form className="d-flex input-group w-auto">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Type query"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  data-mdb-ripple-color="dark"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;
