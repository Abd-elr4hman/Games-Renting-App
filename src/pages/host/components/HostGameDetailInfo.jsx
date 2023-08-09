import { useOutletContext } from "react-router-dom";

function HostGameDetailInfo() {
  const [game, setGame] = useOutletContext();

  return (
    <div style={{ background: "white", padding: "10px" }}>
      <p>
        <b>Name</b>: {game.name}
      </p>
      <p>
        <b>Category</b>: {game.type}
      </p>
      <p>
        <b>Desciprtion</b>: {game.description}
      </p>
    </div>
  );
}

export default HostGameDetailInfo;
