const CountriesList = ({ countriesList }) => {
  if (countriesList && countriesList.length) {
    return countriesList.map((country) => (
      <option
        key={country.country.country_id}
        value={
          country.country.country_name[0].toUpperCase() +
          country.country.country_name.slice(1).toLowerCase()
        }>
        {country.country.country_name[0].toUpperCase() +
          country.country.country_name.slice(1).toLowerCase()}
      </option>
    ));
  }
  return <option>Loading</option>;
};

export default CountriesList;
