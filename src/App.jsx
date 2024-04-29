import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Wikidata Api Example!</h1>
      <p>This is a basic app to demonstrate Wikidata API.</p>
      <form action="/search" method="get">
        <input type="text" name="search" placeholder="Enter your search" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
