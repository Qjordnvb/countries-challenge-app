import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// components
import Header from "../components/header/header";
import { BorderCountry } from "../components/containers/border-country";
// styles
import "./detail.css";

const Details = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <Header />
      <div className="container-button-back">
        <div
          onClick={() => {
            history.push("/");
          }}
          className="button-back"
        >
          <FontAwesomeIcon className="icon-arrow" icon={faArrowLeft} />
          Go Back
        </div>

        <div className="container-detail">
          <div className="flag-img">
            <img
              src={location.state.country.flag}
              alt={location.state.country.name}
            />
          </div>
          <div className="container-flex">
            <h2>{location.state.country.name}</h2>
            <div className="detail-body">
              <div className="detail-col-left">
                <p>
                  <strong>Native name: </strong>
                  {location.state.country.nativeName}
                </p>
                <p>
                  <strong>Population: </strong>
                  {location.state.country.population}
                </p>
                <p>
                  <strong>Region: </strong>
                  {location.state.country.region}
                </p>
                <p>
                  <strong>Sub region: </strong>
                  {location.state.country.subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {location.state.country.capital}
                </p>
              </div>
              <div className="detail-col-right">
                <p>
                  <strong>Top Level Domain: </strong>
                  {location.state.country.topLevelDomain[0]}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {location.state.country.currencies.map(
                    (currency) => currency.code
                  )}
                </p>
                <p>
                  <strong>Languages: </strong>
                  {location.state.country.languages.map(
                    (language) => language.name
                  )}
                </p>
              </div>
            </div>
            <div className="button-container">
              <strong>Border Countries:</strong>
              {location.state.country.borders.map((border) =>
                BorderCountry(border)
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
