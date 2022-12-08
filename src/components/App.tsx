import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";
import useBusiness from "../hooks/useBusiness";

function App() {
  const {
    term,
    location,
    businesses,
    onButtonClick,
    onSubmit,
    handleLocationChange,
    handleBusinessChange,
  } = useBusiness();

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar
        onButtonClick={onButtonClick}
        onSubmit={onSubmit}
        term={term}
        location={location}
        onLocationInput={handleLocationChange}
        onBusinessInput={handleBusinessChange}
      />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
