/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const CountryDetail = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <div>
      <p>country detaails </p>
    </div>
  );
};

export default CountryDetail;
