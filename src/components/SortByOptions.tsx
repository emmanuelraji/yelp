import { Options } from "../lib/types";

const sortByOptions: Options = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

type SortByOptions = {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
};

export default function SortByOptions({ sortBy, setSortBy }: SortByOptions) {
  function getSortByClass(sortByOption: string) {
    if (sortBy === sortByOption) {
      return "active";
    }
    return "";
  }

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

  return <ul>{renderSortByOptions()}</ul>;
}
