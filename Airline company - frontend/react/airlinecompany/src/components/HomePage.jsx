import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./css/HomePage.css";

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

  const api = {
    key: "9027a17e9a6ed2f18f6586b3d3a286f0",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
      Search button is pressed. Make a fetch call to the Open Weather Map API.
    */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

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
        </div>
        <div className="quote-container">
          <blockquote className="blockquote text-center ">
            <h4 className="mb-0">{content}</h4>
            <br></br>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
          <div calssName="button-container">
            <button
              onClick={getNewQuote}
              className="quote-button"
              type="button"
            >
              New Quote
            </button>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <div className="weather-container">
          <div>
            <h3>Check Weather</h3>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter city/town..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <button onClick={searchPressed} className="weather-button">
            Search
          </button>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>

        {typeof weather.main !== "undefined" ? (
          <div className="">

            <blockquote className="blockquote text-center">
              {/* Location  */}
              <p>{weather.name}</p>

              {/* Temperature Celsius  */}
              <p>{weather.main.temp}°C</p>

              {/* Condition (Sunny ) */}
              <p>{weather.weather[0].main}</p>
              <p>({weather.weather[0].description})</p>
            </blockquote>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default HomePage;
