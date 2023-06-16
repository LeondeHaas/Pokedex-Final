import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination"; // Corrected import statement

function Homepage() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      })
      .catch((error) => {
        console.log("Error:", error.message);
        setLoading(false);
      });

    return () => {
      cancel();
    };
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    if (prevPageUrl) {
      setCurrentPageUrl(prevPageUrl);
    }
  }

  if (loading) return "Loading content...";

  return (
    <>
      <div className="wrapper">
        <PokemonList pokemon={pokemon} />
        <Pagination
          gotoNextPage={gotoNextPage}
          gotoPrevPage={gotoPrevPage}
        />
      </div>
    </>
  );
}

export default Homepage;
