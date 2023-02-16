import React from "react";

function HomePage() {
  return (
    <div>
      <div className="wrapper border">
        <form action="#">
          <div className="form-group border-bottom d-flex align-items-center justify-content-around flex-wrap">
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
          </div>
          <div className="form-group d-sm-flex margin">
            <div className="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
              <input
                type="text"
                required
                placeholder="From"
                className="form-control"
              />
              <div className="label" id="from" />
            </div>
            <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
              <input
                type="text"
                required
                placeholder="To"
                className="form-control"
              />
              <div className="label" id="to" />
            </div>
          </div>
          <div className="form-group d-sm-flex margin">
            <div className="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative">
              <input
                type="date"
                required
                placeholder="Depart Date"
                className="form-control"
              />
              <div className="label" id="depart" />
            </div>
            <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
              <input
                type="date"
                required
                placeholder="Return Date"
                className="form-control"
              />
              <div className="label" id="return" />
            </div>
          </div>
          <div className="form-group my-3">
              <div 
                className="btn btn-secondary rounded-2 d-flex justify-content-center text-center p-3">
                Search Flights
              </div>
            </div>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
