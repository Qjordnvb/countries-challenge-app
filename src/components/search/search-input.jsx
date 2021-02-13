import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import IconSearch from "../../assets/img/search-solid.svg";

const SearchInput = () => {
  // State to manage the value of the input
  const [value, setvalue] = useState("");

  // Method to set the value of the input
  const handleChangeValue = (value) => {
    setvalue(value);
    searchCountries(value);
  };

  // Method to hide or show countries by his name
  const searchCountries = (value) => {
    const countryName = document.querySelectorAll(".country-name");
    countryName.forEach((name) => {
      if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
        name.parentElement.parentElement.style.display = "block";
      } else {
        name.parentElement.parentElement.style.display = "none";
      }
    });
  };

  return (
    <div className="container-search">
      <FontAwesomeIcon
        class="icon-search"
        icon={faSearch}
        style={{ color: "inherit" }}
      />
      <input
        className="search"
        type="text"
        placeholder="Search for a country"
        value={value}
        onChange={(event) => {
          handleChangeValue(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchInput;
