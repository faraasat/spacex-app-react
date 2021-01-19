import { Link } from "react-router-dom";
import "./home.styles.css";

const HomeComponent = () => {
  return (
    <div>
      <div className="background-container">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
          alt=""
        />
        <div className="home-typo">
          <h1>
            SpaceX<span> App</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed
            deleniti porro veniam at dolores qui soluta nulla perferendis
            voluptas iure ipsa doloremque aspernatur, tempora harum quam
            voluptatum explicabo et?
          </p>
          <button>
            <Link to="/explore">Get Started!</Link>
          </button>
        </div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
    </div>
  );
};

export default HomeComponent;
