import { Link } from "react-router-dom";
import Footers from "../headComponents/Footer";
import image from "../../assets/wallpaperflare.com_wallpaper.jpg";

function About() {
  return (
    <div>
      <header>
        <img src={image} className="about-img" />
      </header>
      <main className="about-main">
        <h1 className="about-title">
          Never have to pay full price for every game you wish to play!
        </h1>
        <p className="about-text">
          Our mission is to provde an easy way for gamers to share games! we
          provide a blazing fast delivery service, and distribution centers to
          exchagne games with anyone anywhere!
        </p>
        <p className="about-text">
          Our team is full of Gaming aficionados who wish to make game sharing
          easier for all the gamers of the world!
        </p>
        <div className="card about-card">
          <div className="card-body">
            <p className="card-title">
              Browse our large collection of games now!
            </p>
            <Link to="/games" className="btn btn-primary about-button">
              Find Games
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
