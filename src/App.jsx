import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchData from "./utils";
import { instance } from "./api";

import "./App.css";
import Pagination from "./conpoments/pagination";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const getData = (data) => {
    instance
      .get("", {
        params: {
          search: data,
          origin: "*",
        },
      })
      .then((e) => {
        console.log(e.data.search[0].id);
        setData(e.data.search);
      })
      .catch((error) => {
        console.log("error=<:", error);
      });
  };

  const indexOfLastItem = currentPage * postsPerPage;
  const indexOfFirstItem = indexOfLastItem - postsPerPage;
  const currentPosts = data?.slice(indexOfFirstItem, indexOfLastItem);
  console.log("currentPosts", currentPosts);
  function handleChange(e) {
    e.preventDefault();
    setInputValue(e?.target?.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    getData(inputValue);
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="body">
      <div className="body-content">
        <h2>Wikidata Api Example!</h2>
        <form onSubmit={handleSubmit} action="/search" method="get">
          <input
            type="text"
            name="search"
            value={inputValue}
            onChange={handleChange}
            placeholder="    Enter your search"
          />
          <button type="submit">Submit</button>
        </form>
        {currentPosts?.length > 0 ? (
          <div className="resultat">
            <p className="titre">{data?.length} resultats</p>
            {currentPosts.map((item) => {
              console.log(item.url.slice(2));
              return (
                <div className="detail-content">
                  <div className="output">
                    <img src="/vite.svg"></img>
                    <h3>
                      <a
                        href={item.url.slice(2)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label"
                      >
                        {item.label}
                      </a>
                    </h3>
                    <div className="description">
                      <h5>Description</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  {/* <table
                    style={{
                      width: "100%",
                      tableLayout: "fixed",
                    }}
                  >
                    <thead>
                      <tr>
                        <th>Label</th>
                        <th>Description</th>
                        <th>Url</th>
                        <th>Wikidata Id</th>
                      </tr>
                    </thead>
                    <tbody key={item.id}>
                      <tr>
                        <td>{item.label}</td>
                        <td>{item.description}</td>
                        <td>{item.url}</td>
                        <td>{item.id}</td>
                      </tr>
                    </tbody>
                  </table> */}
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
        <Pagination
          postsPerPage={postsPerPage}
          data={data}
          paginate={paginate}
        />
      </div>
      <div className="body-footer">
        <div>View source</div>
        <div>Report an issue</div>
        <div>Db source</div>
        <div>Developped by Firmin and Gerard</div>
      </div>
    </div>
  );
}

export default App;
