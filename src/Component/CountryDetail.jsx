/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const CountryDetail = () => {
  const details = useLoaderData();
  //   console.log(details);
  return (
    <div className="w-9/12 mx-auto border border-white p-10">
      <div className="flex flex-row items-center">
        <div className="w-3/4">
          <h3 className="text-2xl font-bold mt-2">
            Name : {details[0]?.name.common}
          </h3>
          <h4 className="text-xl mb-3">
            Official Name : {details[0]?.name.official}
          </h4>
          <p className="text-lg">Capital City : {details[0]?.capital}</p>
          <p className="text-lg">Population : {details[0]?.population}</p>
          <p className="text-lg">Region : {details[0]?.region}</p>
          <p className="text-lg">Sub Region : {details[0]?.subregion}</p>
          <p className="text-lg">Area Size : {details[0]?.area} sq. km.</p>
          <p className="text-lg">
            Location :{" "}
            <a
              className="text-blue-700 font-bold"
              href={details[0]?.maps.googleMaps}
              target="_blank"
            >
              Google Map
            </a>
          </p>
          <p className="text-lg">FIFA display : {details[0]?.fifa}</p>
          <p className="text-lg">Timezone : {details[0]?.timezones}</p>
        </div>
        <div className="w-1/4">
          <div>
            <img
              src={details[0]?.flags.png}
              alt=""
            />
          </div>
          <div>
            <img
              src={details[0]?.coatOfArms.png}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
