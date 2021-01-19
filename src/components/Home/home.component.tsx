import { Link } from "react-router-dom";
import "./home.styles.css";
import Galaxy1 from "../../assets/galaxy1.png";

const HomeComponent = () => {
  return (
    <div>
      <div className="background-container">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
          alt=""
        />
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <div className="home-typo">
        <h1>
          SpaceX<span> App</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed
          deleniti porro veniam at dolores qui soluta nulla perferendis voluptas
          iure ipsa doloremque aspernatur, tempora harum quam voluptatum
          explicabo et?
        </p>
        <button>
          <Link to="/explore">Get Started!</Link>
        </button>
      </div>
      <div className="objects">
        <img
          className="object_rocket"
          src="http://salehriaz.com/404Page/img/rocket.svg"
          width="40px"
          alt="rocket"
        />
        <img
          className="object_moon"
          src="http://salehriaz.com/404Page/img/moon.svg"
          width="80px"
          alt="small moon"
        />
        <img className="object-galaxy__1" src={Galaxy1} alt="galaxy 1" />
        <div className="box_astronaut">
          <img
            className="object_astronaut"
            src="http://salehriaz.com/404Page/img/astronaut.svg"
            width="140px"
            alt="astronaut"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
