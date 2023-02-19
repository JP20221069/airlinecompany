import React from "react";
import OneOffer from "./OneOffer";
import axios from "axios";
import { useState, useEffect } from "react";


function OffersPage() {
  const [offers, setOffers] = useState();
  useEffect(() => {
    if (offers == null) {
      axios.get("http://127.0.0.1:8000/api/flights").then((response) => {
        console.log(response.data);
        setOffers(response.data.flights);
      });
    }
  });

  return (
    <div className="all-offers">
      {offers == null ? <></> : offers.map((offer) => (
        <OneOffer offer={offer} key={offer.id} />
      ))}
    </div>
  );
}

export default OffersPage;
