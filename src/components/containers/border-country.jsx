import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
// services
import { findOneCountry } from "../../services/api.service";
//components
import NotFound from "../not-found";
// styles
import "./borders-countries.css";

export const BorderCountry = (countryCode) => {
  const [country, setCountry] = useState({});

  // estados del modal

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // funcion para acceder al pais atra vez de su country code

  const findDetailCountry = async () => {
    try {
      setCountry(await findOneCountry(countryCode));
    } catch (error) {
      return <NotFound />;
    }
  };

  return (
    <>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="information-text" style={{ color: "black" }}>
          <h2 className="country-name">{country.name}</h2>
          <p>
            <strong>Population: </strong>
            {country.population}
          </p>
          <p className="country-region">
            <strong>Region: </strong>
            {country.region}
          </p>
          <p>
            <strong>Capital: </strong>
            {country.capital}
          </p>
        </div>
      </Modal>
      <button className="button-find-detail" onClick={findDetailCountry}>
        <a onClick={onOpenModal}>{countryCode}</a>
      </button>
    </>
  );
};
