import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import "./style/LandingPage.css";
import Footer from "./components/Footer";
import "./style/Footer.css";

function App() {
  return (
    <div className="myBG">
      <div>
        <NavigationBar />
        <Intro />
        <Footer />
      </div>
    </div>
  );
}

export default App;
