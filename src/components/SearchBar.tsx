import { FormEvent, useEffect, useRef, useState } from "react";
import SortByOptions from "./SortByOptions";

function SearchBar({
  searchYelp,
}: {
  searchYelp: (term: string, location: string, sortBy: string) => void;
}) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      if (location && term) {
        searchYelp(term, location, sortBy);
      }
    }
  }, [sortBy]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    searchYelp(term, location, sortBy);
  }

  return (
    <section className="search">
      <SortByOptions sortBy={sortBy} setSortBy={setSortBy} />
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
  );
}

export default SearchBar;
