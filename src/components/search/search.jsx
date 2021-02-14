import React from "react";
import "./search.css";
import SearchInput from "./search-input";
import SearchDropdown from "./search-dropdown";

const Search = () => (
  <section>
    <div className="container-master">
      <SearchInput />
      <SearchDropdown />
    </div>
  </section>
);

export default Search;
