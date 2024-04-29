async function FetchData(searchQuery) {
  const url = "https://www.wikidata.org/w/api.php";

  //   const params = new URLSearchParams({
  //     action: "wbsearchentities",
  //     format: "json",
  //     search: searchQuery,
  //     language: "fr",
  //   });

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  const response = await fetch(
    `https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&search=${searchQuery}&language=fr`,
    {
      mode: "no-cors",
    },
    { headers }
  );
  console.log("response", response);
  const data = await response.json();

  const finalData = [];
  data.search.forEach((entity) => {
    const item = {
      label: entity.label,
      description: entity.description,
      url: entity.url,
      wd_id: entity.title,
    };
    finalData.push(item);
  });
  return finalData;
}

export default FetchData;
