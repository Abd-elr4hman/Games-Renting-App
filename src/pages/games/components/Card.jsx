import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

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

function Card(props) {
  return (
    <div className="card card-item">
      <div className="card-body card-item-body">
        <img src={props.imgPath} className="card-img-top" alt="..."></img>
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {props.price} EGP/week
        </h6>
        <button
          className="card-type"
          style={{ background: `${checkColor(props.type)}` }}
        >
          {props.type}
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  imgPath: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string,
};

export default Card;
