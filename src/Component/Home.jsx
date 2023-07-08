/* eslint-disable no-unused-vars */
import React from "react";

const Home = () => {
  return (
    <div>
      <h1
        id="header"
        className=" text-4xl text-center mt-16 font-bold"
      >
        Search Country for details
      </h1>
      <div className="w-3/12 mt-5 mx-auto border-b-2 border-black rounded-lg p-1">
        <input
          className="w-full mx-auto rounded-lg shadow-inner text-xl bg-transparent p-1 focus:shadow-sm focus:shadow-lime-200 text-center"
          type="search"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Home;
