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
    <Link onClick={getOffers} to="/offers">
      Search Flights
    </Link>
  );
}

export default HomePage;
