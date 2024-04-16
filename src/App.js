import { useState } from "react";
import "./App.css";
import Chart from "./Components/Chart/Chart";
import EducationGroups from "./Components/Education Groups/EducationGroups";
import Footer from "./Components/Footer/Footer";
import UnivercityHistory from "./Components/History/History";
import UnivercityIntro from "./Components/Introduction/Intro";
import Navbar from "./Components/Navbar/Navbar";
import UnivercityLeaders from "./Components/Univercity Leaders/UnivercityLeaders";
import DepDash from "./Components/Home/DepDash";
import GroupDash from "./Components/Home/GroupsDash";

function App() {
  const [activeLink, setActiveLink] = useState("teachers");

  const handleNavbarLinkClick = (value) => {
    setActiveLink(value);
  };

  return (
    <div className="App">
      <Navbar onLinkClick={handleNavbarLinkClick} />

      {activeLink === "teachers" && <DepDash />}
      {activeLink === "groups" && <GroupDash />}
      <hr />
      <UnivercityHistory />
      <hr />
      <UnivercityIntro />
      <hr />
      <EducationGroups />
      <hr />
      <Chart />
      <hr />
      <UnivercityLeaders />
      <Footer />
    </div>
  );
}

export default App;
