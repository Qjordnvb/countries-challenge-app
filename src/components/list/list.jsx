import React, { useState, useEffect } from "react";
// components
import Item from "../item/item";
// services
import { findAllCountries } from "../../services/api.service";
// styles
import "./list.css";

const List = () => {
  // estado para manejar los paises
  const [countries, setCountries] = useState([]);

  // estado para el loading
  const [loading, setLoading] = useState(true);

  // fetch a la api de rest countries
  useEffect(() => {
    async function findCountries() {
      setCountries(await findAllCountries());
      setLoading(false);
    }
    findCountries();
  }, [loading]);

  return loading ? (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <div className="container-master">
      {countries.map((country, index) => (
        <Item country={country} key={index} />
      ))}
    </div>
  );
};

export default List;
