/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  const { name, status, capital, region } = country;
  return (
    <div className="border border-black rounded-lg p-2 mt-3">
      <h3 className="text-lg font-bold">{name.common}</h3>
      <p>Status : {status}</p>
      <p>Capital : {capital}</p>
      <p>Region : {region}</p>
      <Link
        className="mt-3"
        to={`/search/${name.common}`}
      >
        <button className="bg-blue-300 mt-3 w-full p-2 rounded-lg hover:bg-blue-600 hover:shadow-md hover:shadow-slate-500">
          Details
        </button>
      </Link>
    </div>
  );
};

export default Country;
