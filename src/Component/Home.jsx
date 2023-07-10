/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Country from "./Country";
import { Link, useLocation, useParams } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState();
  const location = useLocation();
  const { name } = useParams();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setSearchResults();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(query);
    if (query.trim() === "") {
      return; // Exit the function early if the query is empty
    }
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${query}`
      );
      const data = await response.json();
      setSearchResults(data);
      // Process the search results data or update your application state accordingly
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  // console.log(searchResults);

  useEffect(() => {
    // Clear search results when navigating to the root route or search result route
    if (location.pathname === "/" || location.pathname === `/search/${name}`) {
      setSearchResults([]);
    }
  }, [location, name]);
  return (
    <div>
      <Link to="/">
        <h1
          id="header"
          className=" text-4xl text-center mt-16 font-bold"
        >
          Search Country for details
        </h1>
      </Link>
      <div className="w-3/12 mt-5 mx-auto border-b-2 border-black flex rounded-lg p-1">
        <form
          className="w-full"
          onSubmit={handleSubmit}
        >
          <input
            className="bg-transparent  w-3/4 text-center"
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          <button
            className="text-center rounded-lg bg-white px-3 py-1 w-1/4"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <div className="mt-5 w-1/3 mx-auto">
        {searchResults?.map((country) => (
          <Country
            key={country.cca2}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Home;
