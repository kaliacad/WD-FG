import axios from "axios";

const urlbase = "https://www.wikidata.org/w/api.php";

const instance = axios.create({
  baseURL: urlbase,
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
  params: {
    action: "wbsearchentities",
    format: "json",
    language: "fr",
    limit: 10000,
  },
});

export { instance, urlbase };
