import { useEffect, useState } from "react";
import FetchData from "./utils";
import { instance } from "./api";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState();

  const getData = (data) => {
    instance
      .get("", {
        params: {
          search: data,
          origin: "*",
        },
      })
      .then((e) => {
        console.log(e.data);
        setData(e.data.search);
      })
      .catch((error) => {
        console.log("error=<:", error);
      });
  };

  function handleChange(e) {
    e.preventDefault();
    setInputValue(e?.target?.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    getData(inputValue);
  }

  return (
    <>
      <h1>Wikidata Api Example!</h1>
      <p>This is a basic app to demonstrate Wikidata API.</p>
      <form onSubmit={handleSubmit} action="/search" method="get">
        <input
          type="text"
          name="search"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your search"
        />
        <button type="submit">Submit</button>
      </form>
      {data?.length > 0 ? (
        <div>
          {data.length} resultats
          {data.map((item) => {
            return (
              <div>
                <table>
                  <tbody key={item.wd_id}>
                    <th>
                      <th>Label</th>
                      <th>Description</th>
                      <th>Url</th>
                      <th>Wikidata Id</th>
                    </th>
                    <tr>
                      <td>{item.label}</td>
                      <td>{item.description}</td>
                      <td>{item.url}</td>
                      <td>{item.wd_id}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
