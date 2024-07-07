import { FormEvent, useEffect, useRef, useState } from "react";
import { optionsType } from "../types";
import useBusiness from "../hooks/useBusiness";
import BusinessList from "./BusinessList";

function SearchBar() {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const { businesses, isLoading, error, searchYelp } = useBusiness(
    term,
    location,
    sortBy
  );

  const sortByOptions: optionsType = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  function renderSortByOptions() {
    return Object.keys(sortByOptions).map((item) => {
      let sortByOptionValue = sortByOptions[item];
      return (
        <li
          key={sortByOptionValue}
          onClick={() => setSortBy(sortByOptionValue)}
          className={getSortByClass(sortByOptionValue)}
        >
          {item}
        </li>
      );
    });
  }

  function getSortByClass(sortByOption: string) {
    if (sortBy === sortByOption) {
      return "active";
    }
    return "";
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // const formData = new FormData(e.target as HTMLFormElement);

    setSortBy(sortBy);
    searchYelp();
  }

  return (
    <>
      <section className="search">
        <ul>{renderSortByOptions()}</ul>
        <form onSubmit={handleSubmit}>
          <label htmlFor="term"></label>
          <input
            type="text"
            id="term"
            name="term"
            placeholder="Search Business"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <label htmlFor="location"></label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Where?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button>Let's go!</button>
        </form>
      </section>
      <BusinessList
        businesses={businesses}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}

export default SearchBar;
