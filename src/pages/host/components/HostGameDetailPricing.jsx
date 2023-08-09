import { useOutletContext } from "react-router-dom";

function HostGameDetailPricing() {
  const [game, setGame] = useOutletContext();
  return (
    <div style={{ background: "white", padding: "10px" }}>
      <p>
        <b>{game.price} EGP/WEEK</b>
      </p>
    </div>
  );
}

export default HostGameDetailPricing;
