import NotFound from "../components/not-found";

export const findAllCountries = async () => {
  try {
    return (await fetch("https://restcountries.eu/rest/v2/all")).json();
  } catch (error) {
    return <NotFound />;
  }
};

export const findOneCountry = async (countryCode) => {
  try {
    return (
      await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
    ).json();
  } catch (error) {
    return <NotFound />;
  }
};
