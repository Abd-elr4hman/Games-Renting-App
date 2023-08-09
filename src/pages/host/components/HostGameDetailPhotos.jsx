import { useOutletContext } from "react-router-dom";

function HostGameDetailPhotos() {
  const [game, setGame] = useOutletContext();
  return (
    <div style={{ background: "white", padding: "10px" }}>
      <img src={game.imageUrl} alt="" style={{ width: "50px" }} />
    </div>
  );
}

export default HostGameDetailPhotos;
