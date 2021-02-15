import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// services
import { filterCountries } from "../../services/logic.service";

const SearchDropdown = () => {
  // estado que maneja la visibilidad del dropdown
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // estado para obtener el valor de la region
  const [selectedRegion, setSelectedRegion] = useState("Filter by region");

  // Metodo para desplegar el dropdown
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // funcion para filtrar por region
  const handleClick = (event) => {
    filterCountries(event.target.innerText);
    setSelectedRegion(event.target.innerText);
  };

  return (
    <div className="dropdown" onClick={toggleDropdown}>
      {selectedRegion === "All" ? "Filter by region" : selectedRegion}
      <FontAwesomeIcon className="fas fa-chevron-down" icon={faChevronDown} />
      {dropdownVisible && (
        <ul>
          <li onClick={handleClick}>All</li>
          <li onClick={handleClick}>Africa</li>
          <li onClick={handleClick}>America</li>
          <li onClick={handleClick}>Asia</li>
          <li onClick={handleClick}>Europe</li>
          <li onClick={handleClick}>Oceania</li>
        </ul>
      )}
    </div>
  );
};

export default SearchDropdown;
