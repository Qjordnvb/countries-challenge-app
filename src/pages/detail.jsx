import React from "react";
import Header from "../components/header/header";
import { useLocation } from "react-router-dom";
// import "../Style/Details.css";

const Details = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="detail">
        <div className="container">
          <img
            src={location.state.country.flag}
            alt={location.state.country.name}
          />
          <div className="detail-body">
            <h2>{location.state.country.name}</h2>
            <p>
              <strong>Native name: </strong>
              {location.state.country.nativeName}
            </p>
            <p>
              <strong>Population: </strong>
              {location.state.country.population}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
