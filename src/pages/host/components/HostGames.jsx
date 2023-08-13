import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHostGames } from "../../../../api";
import { UserAuth } from "../../../context/AuthContext";
import { useOutletContext } from "react-router-dom";

const checkColor = (description) => {
  switch (description) {
    case "Classic":
      return "black";
    case "Sports":
      return "#115E59";
    case "Action":
      return "#E17654";
    default:
  }
};

function HostGames() {
  // const [games, setGames] = useState([]);
  // const { user } = UserAuth();

  // useEffect(() => {
  //   // fetch("/api/host/games")
  //   //   .then((res) => res.json())
  //   //   .then((data) => setGames(data.games));

  //   getHostGames(user).then((games) => setGames(games));
  // }, []);

  const [reviews, transactions, games] = useOutletContext();
  const hostGames = games.map((game) => (
    <Link
      to={`/host/games/${game.id}`}
      key={game.id}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <div className="host-games--card-container" key={game.id}>
        <img className="host-games--img" src={game.imageUrl} alt="" />
        <div className="host-games--body">
          <h3>{game.name}</h3>
          <p>{game.price} EGP/WEEK</p>
          <button
            className="card-type"
            style={{ background: `${checkColor(game.type)}` }}
          >
            {game.type}
          </button>
        </div>
      </div>
    </Link>
  ));

  return (
    <div style={{ margin: "10px" }}>
      <h1 style={{ marginLeft: "20px" }}>Your listed games</h1>
      <div className="host-games--container">{hostGames}</div>
      <div className="host-games--add-game-dev">
        <Link
          to="../addgame"
          className="btn btn-primary host-games--add-game-btn"
        >
          Add game
        </Link>
      </div>
    </div>
  );
}

export default HostGames;
