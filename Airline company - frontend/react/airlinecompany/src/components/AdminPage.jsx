import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FiUserMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function AdminPage({ token, user }) {

  // console.log(token);
  // console.log(user);

  const [users, setUsers] = useState();
  var config2 = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://127.0.0.1:8000/api/users",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  useEffect(() => {
    if (users == null) {
      axios.get("http://127.0.0.1:8000/api/users", config2).then((response) => {
        console.log(response.data);
        setUsers(response.data.users);
      });
    }
  });

  function getUsers() {
    if (users == null) {
      axios.get("http://127.0.0.1:8000/api/users", config2).then((response) => {
        console.log(response.data);
        setUsers(response.data.users);
      });
    }
  }

  const [reservations, setReservations] = useState();

  var config1 = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://127.0.0.1:8000/api/reservations",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  useEffect(() => {
    if (reservations == null) {
      axios.get("http://127.0.0.1:8000/api/reservations", config1).then((response) => {
        console.log(response.data);
        setReservations(response.data.reservations);
      });
    }
  });

  function deleteUser(id) {

    var config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8000/api/deleteuser/' + id,
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
            axios.get("http://127.0.0.1:8000/api/users", config2).then((response) => {
              Swal.fire('User deleted successfully', '', 'success');
              console.log(response.data);
              setUsers(response.data.users);
            });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <section>
        <h1>USER LIST</h1>
        <div className="tbl-header">
          <table cellPadding={0} cellSpacing={0} border={0}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th style={{ color: 'red' }}>DELETE</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table >
            <tbody >
              {users == null ? (
                <></>
              ) : (
                users.map((user) => (
                  <tr key={user.id} >
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.role.name}</td>
                    <td><Link style={{ color: 'red' }} onClick={() => { deleteUser(user.id) }}><FiUserMinus /></Link></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h1>RESERVATIONS LIST</h1>
        <div className="tbl-header">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Flight ID</th>
                <th>From</th>
                <th>To</th>
                <th>Departure Date</th>
                <th>Arrival Date</th>
                <th>User ID</th>
                <th>Name</th>
                <th>Lastname</th>
                <th>Adults count</th>
                <th>Children count</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding={0} cellSpacing={0} border={0}>
            <tbody>
              {reservations == null ? (
                <></>
              ) : (
                reservations.map((reservation) => (
                  <tr key={reservation.id}>
                    <td>{reservation.id}</td>
                    <td>{reservation.flight.id}</td>
                    <td>{reservation.flight.city_from.name}</td>
                    <td>{reservation.flight.city_to.name}</td>
                    <td>{reservation.flight.datetime_departure}</td>
                    <td>{reservation.flight.datetime_arrival}</td>
                    <td>{reservation.user.id}</td>
                    <td>{reservation.user.name}</td>
                    <td>{reservation.user.lastname}</td>
                    <td>{reservation.number_of_adults}</td>
                    <td>{reservation.number_of_children}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default AdminPage;
