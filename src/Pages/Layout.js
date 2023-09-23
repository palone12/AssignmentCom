import Home from "./Home";
import History from "./History";
import Team from "./Team";
import Navbar from "../components/Navbar";

function Layout({ childern }) {
  return (
    <div className="App">
      <Home />
      <History />
      <Team />
    </div>
  );
}

export default Layout;
