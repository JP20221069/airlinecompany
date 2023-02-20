import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function AdminPage({ token, user }) {

  console.log(token);
  console.log(user);
    
  const [users, setUsers] = useState();
  useEffect(() => {
    if (users == null) {
      axios.get("http://127.0.0.1:8000/api/users", config ).then((response) => {
        console.log(response.data);
        setUsers(response.data.users);
      });
    }
  });

  const [reservations, setReservations] = useState();

  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://127.0.0.1:8000/api/reservations",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  useEffect(() => {
    if (reservations == null) {
      axios.get("http://127.0.0.1:8000/api/reservations", config).then((response) => {
        console.log(response.data);
        setReservations(response.data.reservations);
      });
    }
  });

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
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding={0} cellSpacing={0} border={0}>
            <tbody>
              {users == null ? (
                <></>
              ) : (
                users.map((user, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{user.name}</td>
                    <td>{user.role.name}</td>
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
