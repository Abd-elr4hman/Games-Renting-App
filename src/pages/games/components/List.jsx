import Card from "./Card";
import React from "react";
import { NavLink, Link, useSearchParams } from "react-router-dom";
import { getGames } from "../../../../api";

function GamesList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  // console.log(searchParams.toString());

  // loading stats
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    // setLoading(true);
    // fetch("api/games")
    //   .then((res) => res.json())
    //   .then((res) => setData(res.games));
    // setLoading(false);

    async function loadGames() {
      try {
        const data = await getGames();
        setData(data);
      } catch (err) {
        // console.log("sadgakjfdkjhdsjkhsdfahjkdfsahjksdfahjk");
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, []);

  if (loading) {
    return (
      <div style={{ margin: "20px" }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ margin: "20px" }}>
        <p>Error: ({error.message}), please try again later...</p>
      </div>
    );
  }

  // console.log(data);

  const displayedGames = typeFilter
    ? data.filter((game) => game.type.toLowerCase() === typeFilter)
    : data;

  // console.log(data);
  // console.log(displayedGames);

  const dataElements = displayedGames.map((game) => (
    <div key={game.id} className="col">
      <Link
        to={`/games/${game.id}`}
        state={{ search: searchParams.toString(), type: typeFilter }}
        style={{ textDecoration: "none" }}
      >
        {/* <div className="card card-item"> */}
        <Card
          title={game.name}
          imgPath={game.imageUrl}
          price={parseInt(game.price)}
          type={game.type}
        />
        {/* </div> */}
      </Link>
    </div>
  ));

  return (
    <div className="container gamesList">
      <div className="games-list--filter">
        {/* <NavLink
          className="btn btn-primary games-list--filter--item--classic "
          to="?type=classic"
        >
          Classic
        </NavLink>
        <NavLink
          className="btn btn-primary games-list--filter--item--action "
          to="?type=action"
        >
          Action
        </NavLink>
        <NavLink
          className="btn btn-primary games-list--filter--item--sports"
          to="?type=sports"
        >
          Sports
        </NavLink>
        <Link className="game-list--filter-clear " to=".">
          Clear filters
        </Link> */}
        <button
          title="classic-filter"
          onClick={() => setSearchParams({ type: "classic" })}
          className={`btn btn-primary ${
            typeFilter === "classic"
              ? "games-list--filter--item--classic--selected"
              : "games-list--filter--item--classic"
          }`}
        >
          Classic
        </button>
        <button
          title="action-filter"
          onClick={() => setSearchParams({ type: "action" })}
          className={`btn btn-primary ${
            typeFilter === "action"
              ? "games-list--filter--item--action--selected"
              : "games-list--filter--item--action"
          }`}
        >
          Action
        </button>
        <button
          title="sports-filter"
          onClick={() => setSearchParams({ type: "sports" })}
          className={`btn btn-primary ${
            typeFilter === "sports"
              ? "games-list--filter--item--sports--selected"
              : "games-list--filter--item--sports"
          }`}
        >
          Sports
        </button>
        {typeFilter ? (
          <Link className="game-list--filter-clear " to=".">
            Clear filters
          </Link>
        ) : null}
      </div>
      <div className="row row-cols-auto">{dataElements}</div>
    </div>
  );
}

export default GamesList;
