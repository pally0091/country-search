/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Country from "./Country";

const AllCountry = () => {
  const [countries, setCountries] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  //   console.log(countries);
  return (
    <div className="mt-10">
      <h6 className="text-center text-xl">All Countries</h6>
      <div className="grid grid-cols-3 gap-5 w-11/12 mx-auto mt-5">
        {countries?.map((country) => (
          <Country
            key={country.cca2}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default AllCountry;
