import Card from "./Card";
import crisis from "../../../assets/crisis.jpg";
import elden from "../../../assets/elden-ring.jpg";
import tomb from "../../../assets/tomb-raider.jpg";
import React from "react";
import { Link } from "react-router-dom";

function GamesList() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("api/games")
      .then((res) => res.json())
      .then((res) => setData(res.games));
  }, []);

  console.log(data);

  const dataElements = data.map((game) => (
    <div key={game.id} className="col">
      <Link to={`/games/${game.id}`} style={{ textDecoration: "none" }}>
        <div className="card card-item">
          <Card
            title={game.name}
            imgPath={game.imageUrl}
            price={game.price}
            type={game.type}
          />
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="container gamesList">
      <div className="row row-cols-auto">{dataElements}</div>
    </div>
  );
}

export default GamesList;
