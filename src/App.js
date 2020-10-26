import React, { useEffect, useState } from "react";
import "./App.css";
import Results from "./components/Results/Results";
import Search from "./components/Search/";

export default function App() {
  const [results, setResults] = useState({
    input: "",
    data: [],
  });

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/example`),
      fetch(`https://api.github.com/users/example/repos`),
    ])
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => setResults({ data: data }))
      .catch(console.error);
  }, []);

  const getData = (user) => {
    Promise.all([
      fetch(`https://api.github.com/users/${user}`),
      fetch(`https://api.github.com/users/${user}/repos`),
    ])
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => setResults({ data: data }))
      .catch(console.error);
  };

  const search = (searchValue) => {
    getData(searchValue);
  };

  return (
    <div className="App">
      <Search onSubmit={search} />
      <Results data={results.data} />
    </div>
  );
}
