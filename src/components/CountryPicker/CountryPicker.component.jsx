import React, { useState, useEffect } from "react";

import { fetchCountries } from "../../api";
import { FormControl, NativeSelect } from "@material-ui/core";

const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
    console.log(fetchedCountries);
  }, [setFetchedCountries]);
  return (
    <FormControl>
      <NativeSelect>
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
