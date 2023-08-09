import { useEffect, useState } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

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

function HostGameDetail(game) {
  // const params = useParams();
  // //   console.log(params);

  // const [game, setGame] = useState({});

  // useEffect(() => {
  //   fetch(`/api/host/games/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setGame(data.games[0]));
  // }, []);

  // console.log(game);

  return (
    <div>
      <div className="host-games--details-container">
        <img className="host-games--img" src={game.imageUrl} alt="" />
        <div className="host-games--body">
          <h2>{game.name}</h2>
          <p>{game.price} EGP/WEEK</p>
          <button
            className="card-type"
            style={{ background: `${checkColor(game.type)}` }}
          >
            {game.type}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HostGameDetail;
