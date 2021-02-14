import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// services
import { filterCountries } from "../../services/logic.service";

const SearchDropdown = () => {
  // State to manage the visibility of dropdown menu
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Method to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="dropdown" onClick={toggleDropdown}>
      Filter by region
      <FontAwesomeIcon className="fas fa-chevron-down" icon={faChevronDown} />
      {dropdownVisible && (
        <ul>
          <li
            onClick={(event) => {
              filterCountries(event.target.innerText);
            }}
          >
            All
          </li>
          <li
            onClick={(event) => {
              filterCountries(event.target.innerText);
            }}
          >
            Africa
          </li>
          <li
            onClick={(event) => {
              filterCountries(event.target.innerText);
            }}
          >
            America
          </li>
          <li
            onClick={(event) => {
              filterCountries(event.target.innerText);
            }}
          >
            Asia
          </li>
          <li
            onClick={(event) => {
              filterCountries(event.target.innerText);
            }}
          >
            Europe
          </li>
          <li
            onClick={(event) => {
              filterCountries(event.target.innerText);
            }}
          >
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
};

export default SearchDropdown;
