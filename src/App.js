import "./App.scss";
import { MobileNav } from "./components/navigation/MobileNav/MobileNav";
import { Navbar } from "./components/navigation/Navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="container">
      <div className="navigations">
        <Navbar />
        <MobileNav />
      </div>
      <div className="home">
        <Home />
      </div>
    </div>
  );
}

export default App;
