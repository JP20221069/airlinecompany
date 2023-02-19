import React from "react";

function OneOffer({ offer }) {

  var strDeparture = offer.datetime_departure;  //ISO string
  var strArrival = offer.datetime_arrival;      //ISO string

  var dateDep = new Date(strDeparture);         //Date object
  var dateArr = new Date(strArrival);           //Date object

  var strDep = dateDep.toDateString();          //formatted string
  var strDepTime = dateDep.toTimeString().substring(0,5);//formatted string
  var strArrTime = dateArr.toTimeString().substring(0,5);//formatted string

  const timeDiff = Math.abs(dateArr.getTime() - dateDep.getTime());
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
 
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="card-date-time">
            <h4>{strDep}</h4>
            <div className="card-time">
              <div className="card-departure-time">
                <h1>{strDepTime}</h1>
                <p>{offer.city_from.name}</p>
              </div>
              <div className="card-flight-duration">
                <hr />
                {hours == 0 ? (
                  <p>{minutes}min</p>
                ) : (
                  <p>{hours}h {minutes}min</p>
                )}
              </div>
              <div className="card-arrival-time">
                <h1>{strArrTime}</h1>
                <p>{offer.city_to.name}</p>
              </div>
            </div>
          </div>
          <div className="card-pricing">
            <p>Pricing</p>
            <p>from</p>
            <h1>$150.00</h1>
            <a href="#" className="btn btn-outline-secondary">
              Book This Flight
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneOffer;
