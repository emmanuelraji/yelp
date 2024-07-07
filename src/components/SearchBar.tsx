import { FormEvent, useState } from "react";
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
    searchYelp(term, location, sortBy);
    setTerm("");
    setLocation("");
    setSortBy("best_match");
  }

  return (
    <section className="search">
      <ul>{renderSortByOptions()}</ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="term"></label>
        <input
          type="text"
          id="term"
          placeholder="Search Business"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <label htmlFor="location"></label>
        <input
          type="text"
          id="location"
          placeholder="Where?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button>Let's go!</button>
      </form>
    </section>
  );
}

export default SearchBar;
