import { Outlet } from "react-router-dom";
import HostGameDetail from "./HostGameDetail";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { Link } from "react-router-dom";
import HostGameDetailNav from "./HostGameDetailNav";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getGame } from "../../../../api";

function HostGameLayout() {
  const params = useParams();
  //   console.log(params);

  const [game, setGame] = useState({});

  useEffect(() => {
    // fetch(`/api/host/games/${params.id}`)
    //   .then((res) => res.json())
    //   .then((data) => setGame(data.games[0]));
    getGame(params.id).then((game) => setGame(game));
  }, []);

  return (
    <div>
      <div
        style={{ margin: "20px", marginBottom: "10px", background: "white" }}
      >
        <Link to="../games" style={{ color: "black", padding: "10px" }}>
          &larr; Back to games
        </Link>
        {/* <MobileView> */}
        <HostGameDetail
          name={game.name}
          imageUrl={game.imageUrl}
          type={game.type}
          price={game.price}
        />
        <HostGameDetailNav />
        <Outlet context={[game, setGame]} />
        {/* </MobileView> */}
      </div>
    </div>
  );
}

export default HostGameLayout;
