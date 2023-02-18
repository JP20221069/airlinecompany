import React from "react";
import axios from "axios";

function MyReservations({ user, token, reservations }) {
  console.log(reservations);
  const res = reservations;
  console.log(res);

  return (
    <div style={{ margin: 30 }}>
      <h3>My Reservations</h3>
      <br></br>
      <div style={{ margin: 20 }}>
        <table className="table table-sm">
          <thead className="bg-light">
            <tr>
              <th>ID</th>
              <th>From</th>
              <th>To</th>
              <th>Number of adults</th>
              <th>Date created</th>
            </tr>
          </thead>
          <tbody>
            {res.map((reservation, index) => (
              <tr key={index}>
                <td>
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{reservation.id}</p>
                    <p className="text-muted mb-0">{reservation.flight.id}</p>
                  </div>
                </td>
                <td>
                  <div className="ms-3">
                    <p className="fw-bold mb-1">
                      {reservation.flight.city_from}
                    </p>
                    <p className="text-muted mb-0">
                      {reservation.flight.datetime_departure}
                    </p>
                  </div>
                </td>
                <td>
                  <div className="ms-3">
                    <p className="fw-bold mb-1">
                      {reservation.flight.city_to}
                    </p>
                    <p className="text-muted mb-0">
                      {reservation.flight.datetime_arrival}
                    </p>
                  </div>
                </td>
                <td>
                  <div className="ms-3">
                    <p className="fw-bold mb-1">
                      {reservation.number_of_adults}
                    </p>
                    <p className="text-muted mb-0">
                      {reservation.number_of_children}
                    </p>
                  </div>
                </td>
                <td>
                  <div className="ms-3">
                    <p className="fw-bold mb-1">
                      {reservation.created_at}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyReservations;
