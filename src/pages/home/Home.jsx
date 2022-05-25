import "./home.scss";
import HomeTop from "../../components/home_top/HomeTop";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Footer from "../../components/footer/Footer";
import Leaves from "../../img/leaves.png";

const Home = () => {
  return (
    <div>
      <HomeTop />
      <div className="content-container">
        <img className="leaves" src={Leaves} alt="leaves" />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
