import { ChangeEvent } from "react";

type Props = {
  onButtonClick: (e: HTMLButtonElement) => void;
  onLocationInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onBusinessInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  term: string;
  location: string;
};

function SearchBar({
  onButtonClick,
  onSubmit,
  term,
  location,
  onLocationInput,
  onBusinessInput,
}: Props) {
  return (
    <div>
      <button
        type="button"
        value="best_match"
        onClick={(e) => onButtonClick(e.target as HTMLButtonElement)}
      >
        Best Match
      </button>
      <button
        type="button"
        value="rating"
        onClick={(e) => onButtonClick(e.target as HTMLButtonElement)}
      >
        Highest Rated
      </button>
      <button
        type="button"
        value="review_count"
        onClick={(e) => onButtonClick(e.target as HTMLButtonElement)}
      >
        Most Reviewed
      </button>
      <br />
      <input
        type="text"
        placeholder="Search Business"
        value={term}
        onChange={onBusinessInput}
      />
      <input
        type="text"
        placeholder="Where?"
        value={location}
        onChange={onLocationInput}
      />
      <button onClick={onSubmit}>Let's go!</button>
    </div>
  );
}

export default SearchBar;
