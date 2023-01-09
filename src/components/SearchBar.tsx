import { ChangeEvent, useState } from "react";
import { optionsType, searchProps } from "../types";

function SearchBar({ searchYelp }: searchProps) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

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
          onClick={() => handleSortByChange(sortByOptionValue)}
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

  function handleSortByChange(sortByOption: string) {
    setSortBy(sortByOption);
  }

  function handleTermChange(e: ChangeEvent<HTMLInputElement>) {
    const termInputValue = e.target.value;
    setTerm(termInputValue);
  }

  function handleLocationChange(e: ChangeEvent<HTMLInputElement>) {
    const locationInputValue = e.target.value;
    setLocation(locationInputValue);
  }

  function handleSubmit() {
    searchYelp(term, location, sortBy);
    setTerm("");
    setLocation("");
    setSortBy("best_match");
  }

  return (
    <section className="search">
      <ul>{renderSortByOptions()}</ul>
      <div>
        <input
          type="text"
          placeholder="Search Business"
          value={term}
          onChange={handleTermChange}
        />
        <input
          type="text"
          placeholder="Where?"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <button onClick={handleSubmit}>Let's go!</button>
    </section>
  );
}

export default SearchBar;
