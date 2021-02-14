import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// services
import { searchCountries } from "../../services/logic.service";

const SearchInput = () => {
  // State to manage the value of the input
  const [value, setvalue] = useState("");

  // Method to set the value of the input
  const handleChangeValue = (value) => {
    setvalue(value);
    searchCountries(value);
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
