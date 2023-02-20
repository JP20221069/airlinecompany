import React from "react";
import { useState, useEffect, useMemo } from "react";
import DataTable from "react-data-table-component";


function OffersPage({ offers }) {

  const [from, setFrom] = useState('');
  const handleFromChange = fromEvent => {
    setFrom(fromEvent.target.value);
    // console.log('from is: ', fromEvent.target.value);
  }
  const [to, setTo] = useState('');
  const handleToChange = toEvent => {
    setTo(toEvent.target.value);
    // console.log('to is: ', toEvent.target.value);
  }
  // const [dep, setDep] = useState('');
  // const handleDepChange = depEvent => {
  //   setDep(depEvent.target.value);
  //   console.log('dep is: ', depEvent.target.value);
  // }
  // const [arr, setArr] = useState('');
  // const handleArrChange = arrEvent => {
  //   setArr(arrEvent.target.value);
  //   console.log('arr is: ', arrEvent.target.value);
  // }
  const columns = [
    {
      name: "ID",
      selector: row => row.id
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
    }
  ]

  // const [filterText, setFilterText] = useState('');
  // const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  // const filteredItems = offers.filter(
  //   item => item.city_from.name && item.city_from.name.toLowerCase().includes(filterText.toLowerCase()),
  // );
  // function handleFrom(event) {
  //   const newData = offers.filter(row => {
  //     return row.city_from.name.toLowerCase().includes(event.target.value.toLowerCase());
  //   })
  //   setOffers(newData)
  // }
  // const subHeaderComponentMemo = useMemo(() => {
  //   const handleClear = () => {
  //     if (filterText) {
  //       setResetPaginationToggle(!resetPaginationToggle);
  //       setFilterText('');
  //     }
  //   };

  //   return (
  //     <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
  //   );
  // }, [filterText, resetPaginationToggle]);

  const [flights, setFlights] = useState(offers);
  
  function filterFlights() {
    console.log(offers)
    setFlights(offers)
    setFlights(offers.filter(
      item =>item.city_from.name.toLowerCase().includes(from.toLowerCase()) && item.city_to.name.toLowerCase().includes(to.toLowerCase()),
    ));

  }

  function resetFilter (){
    setFlights(offers)
  }

  return (
    <div className="container mt-30">
      <div>
        <div className="wrapper border">
          <form action="#">
            {/* <div className="form-group border-bottom d-flex align-items-center justify-content-around flex-wrap">
              <label className="option">
                <input type="radio" name="radio" id="" />
                Round trip
                <span className="checkmark"></span>
              </label>
              <label className="option">
                <input type="radio" name="radio" id="" />
                One way
                <span className="checkmark"></span>
              </label>
            </div> */}
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
            {/* <div className="form-group d-sm-flex margin">
              <div className="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative">
                <input
                  type="date"
                  id="dep"
                  name="dep"
                  required
                  placeholder="Depart Date"
                  className="form-control"
                  onChange={handleDepChange}
                  value={dep}
                />
                <div className="label" id="depart" />
              </div>
              <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                <input
                  type="date"
                  id="arr"
                  name="arr"
                  required
                  placeholder="Return Date"
                  className="form-control"
                  onChange={handleArrChange}
                  value={arr}
                />
                <div className="label" id="return" />
              </div>
            </div> */}
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
      {flights == null ? <></> : (
        <DataTable
          columns={columns}
          data={flights}
          selectableRows
          pagination
          // paginationResetDefaultPage={resetPaginationToggle}
          subHeader
          // subHeaderComponent={subHeaderComponentMemo}
          persistTableHead
        ></DataTable>
      )}
    </div>
  );
}

export default OffersPage;
