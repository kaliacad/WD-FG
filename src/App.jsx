import { useState } from "react";
import FetchData from "./utils";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setInputValue(e.target.value);
  }
  function fetchData(e) {
    e.preventDefault();
    console.log("Data", FetchData(inputValue));
  }

  return (
    <>
      <h1>Wikidata Api Example!</h1>
      <p>This is a basic app to demonstrate Wikidata API.</p>
      <form onSubmit={fetchData} action="/search" method="get">
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          name="search"
          placeholder="Enter your search"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
