import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";
import useBusiness from "../hooks/useBusiness";
import "../app.css";

function App() {
  const { businesses, searchYelp } = useBusiness();

  return (
    <div className="App">
      <header>
        <h1>ravenous</h1>
      </header>
      <main>
        <SearchBar searchYelp={searchYelp} />
        <BusinessList businesses={businesses} />
      </main>
    </div>
  );
}

export default App;
