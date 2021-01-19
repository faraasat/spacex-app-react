import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/Home/home.component";
import MissionList from "./components/MissionList/mission-list.component";
import NavBar from "./components/NavBar/navbar.component";

const RouteConfig = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomeComponent />} />
        <Route exact path="/explore" element={<MissionList />} />
      </Routes>
    </Router>
  );
};

export default RouteConfig;
