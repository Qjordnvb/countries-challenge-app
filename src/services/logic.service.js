export const filterCountries = (value) => {
  const regionName = document.querySelectorAll(".country-region");
  regionName.forEach((region) => {
    if (region.innerText.includes(value) || value === "All") {
      region.parentElement.parentElement.style.display = "block";
    } else {
      region.parentElement.parentElement.style.display = "none";
    }
  });
};

export const searchCountries = (value) => {
  const countryName = document.querySelectorAll(".country-name");
  countryName.forEach((name) => {
    if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
      name.parentElement.parentElement.style.display = "block";
    } else {
      name.parentElement.parentElement.style.display = "none";
    }
  });
};
