import { ChangeEvent, useState } from "react";
import { OptionsType, SearchProps } from "../types";

function SearchBar({ searchYelp }: SearchProps) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const sortByOptions: OptionsType = {
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

  function handleTermChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;
    setTerm(target.value);
  }

  function handleLocationChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;
    setLocation(target.value);
  }

  function handleSubmit() {
    searchYelp(term, location, sortBy);
    setTerm("");
    setLocation("");
    setSortBy("best_match");
  }

  return (
    <div>
      <ul>{renderSortByOptions()}</ul>
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
      <button onClick={handleSubmit}>Let's go!</button>
    </div>
  );
}

export default SearchBar;
