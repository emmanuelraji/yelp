import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";
import useBusiness from "../hooks/useBusiness";

function App() {
  const { businesses, searchYelp } = useBusiness();

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
