import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";
import useBusiness from "./lib/hooks";
import "./app.css";

function App() {
  const { businesses, isLoading, error, searchYelp } = useBusiness();

  return (
    <>
      <Header />
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
