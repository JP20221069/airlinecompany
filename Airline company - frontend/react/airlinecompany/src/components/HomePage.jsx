import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage({ addOffers }) {


  function getOffers() {
    axios.get("http://127.0.0.1:8000/api/flights").then((response) => {
      addOffers(response.data.flights);
    });
  }

  return (

    <section id="hero" className="d-flex align-items-center">
      <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 text-center">
            <h1>Welcome to JettAirways!</h1>
          </div>
        </div>
        <div className="row icon-boxes justify-content-center">
          <div className="col-md-6 col-lg-3 d-flex align-items-center mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="ri-stack-line"></i></div>
              <h3 className="title text-center">
                <Link onClick={getOffers} to="/offers">
                  Search Flights
                </Link></h3>
              <p className="description text-center">Take a look at the most attractive destinations around the Globe!</p>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}

export default HomePage;
