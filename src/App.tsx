import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";
import useBusiness from "./hooks/useBusiness";
import "./app.css";

function App() {
  const { businesses, isLoading, error, searchYelp } = useBusiness();

  return (
    <>
      <header>
        <h1>ravenous</h1>
      </header>
      <main>
        <SearchBar searchYelp={searchYelp} />
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
