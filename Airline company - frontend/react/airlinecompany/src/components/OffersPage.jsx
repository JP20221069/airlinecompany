import React from "react";
import { useState, useEffect, useMemo } from "react";
import DataTable from "react-data-table-component";
import { FaPlane } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Modal from "./Modal";


function OffersPage({ token, offers }) {


  const [flights, setFlights] = useState(offers);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const handleFromChange = fromEvent => {
    setFrom(fromEvent.target.value);
    // console.log('from is: ', fromEvent.target.value);
  }
  const handleToChange = toEvent => {
    setTo(toEvent.target.value);
    // console.log('to is: ', toEvent.target.value);
  }
  const [flightID, setFlightID] = useState(0)
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
      maxWidth: '10px '
    },
    {
      name: "City From",
      selector: row => row.city_from.name
    },
    {
      name: "City To",
      selector: row => row.city_to.name
    },
    {
      name: "Departure Date & Time",
      selector: row => row.datetime_departure,
      sortable: true,
    },
    {
      name: "Arrival Date & Time",
      selector: row => row.datetime_arrival,
      sortable: true,
    },
    {
      name: "Book Flight",
      selector: row => row.id,
      cell: () => <Link
        onClick={() => {
          setOpenModal(true)
          console.log(flightID)
        }}
        >
        <FaPlane />
      </Link>, //ovde da prosledim FlightID iz DataTable u Modal
      center: true,
    }
  ]



  function filterFlights() {
    console.log(offers)
    setFlights(offers)
    setFlights(offers.filter(
      item => item.city_from.name.toLowerCase().includes(from.toLowerCase()) && item.city_to.name.toLowerCase().includes(to.toLowerCase()),
    ));

  }

  const [openModal, setOpenModal] = useState(false)


  function resetFilter() {
    setFlights(offers)
  }

  return (
    <div className="container mt-30">
      <div>
        <div className="wrapper border">
          <form action="#">
            <div className="form-group d-sm-flex margin">
              <div className="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
                <input
                  type="text"
                  id="from"
                  name="from"
                  required
                  placeholder="From"
                  className="form-control"
                  onChange={handleFromChange}
                  value={from}
                />
                <div className="label" id="from" />
              </div>
              <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                <input
                  type="text"
                  id="to"
                  name="to"
                  required
                  placeholder="To"
                  className="form-control"
                  onChange={handleToChange}
                  value={to}
                />
                <div className="label" id="to" />
              </div>
            </div>

            <div className="form-group my-3">
              <div className="btn btn-secondary rounded-2 d-flex justify-content-center text-center p-3"
                onClick={filterFlights}>
                Filter Flights
              </div>
              <div className="btn btn-secondary-outline rounded-2 d-flex justify-content-center text-center mt-1 p-3"
                onClick={resetFilter}>
                Reset Filters
              </div>
            </div>
          </form>
        </div>
      </div>
      {flights === null ? <></> : (
        <DataTable
          columns={columns}
          data={flights}
          pagination
          subHeader
          persistTableHead
          selectableRows
          onRowClicked={(row) => {
            console.log(row.id)
            setFlightID(row.id)
            }}
        ></DataTable>
      )}
      {openModal && <Modal closeModal={setOpenModal}  token={token}/>}
    </div>
  );
}

export default OffersPage;
