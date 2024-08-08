import { FormEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  term: string;
  location: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  searchYelp: () => void;
};

function Search({
  searchYelp,
  children,
  term,
  setTerm,
  setLocation,
  location,
}: Props) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    searchYelp();
  }

  return (
    <section className="search">
      {children}
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

export default Search;
