import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage({ addOffers }) {
  function getOffers() {
    axios.get("http://127.0.0.1:8000/api/flights").then((response) => {
      addOffers(response.data.flights);
    });
  }

  const url = "https://api.quotable.io/random";

  const [quotes, setQuotes] = useState([]);

  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  const { content, author } = quotes;

  const axios = require("axios");


  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 text-center">
            <h1>Welcome to JettAirways!</h1>
          </div>
        </div>
        <div className="row icon-boxes justify-content-center">
          <div
            className="col-md-6 col-lg-3 d-flex align-items-center mb-5 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="ri-stack-line"></i>
              </div>
              <h3 className="title text-center">
                <Link onClick={getOffers} to="/offers">
                  Search Flights
                </Link>
              </h3>
              <p className="description text-center">
                Take a look at the most attractive destinations around the
                Globe!
              </p>
              <br></br>
              <br></br>
              <br></br>
              <div className="icon">
                <i className="ri-stack-line"></i>
              </div>
            </div>
          </div>
          <blockquote className="blockquote text-center">
            <p className="mb-0">{content}</p>
            <br></br>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
          <button
            onClick={getNewQuote}
            className="btn btn-outline-secondary"
            type="button"
          >
            New Quote
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
