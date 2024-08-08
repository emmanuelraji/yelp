import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import BusinessList from "./components/BusinessList";
import useBusiness from "./lib/hooks";
import SortByOptions from "./components/SortByOptions";
import "./app.css";

function App() {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");
  const { businesses, isLoading, error, searchYelp } = useBusiness(
    term,
    location,
    sortBy
  );

  return (
    <>
      <Header />
      <main>
        <Search
          term={term}
          setTerm={setTerm}
          location={location}
          setLocation={setLocation}
          searchYelp={searchYelp}
        >
          <SortByOptions sortBy={sortBy} setSortBy={setSortBy} />
        </Search>
        <BusinessList
          businesses={businesses}
          isLoading={isLoading}
          error={error}
        />
      </main>
    </>
  );
}

export default App;
