import './App.css';
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Home from "./components/home.js";
import Skills from "./components/skills.js";
import Proyects from "./components/proyects.js";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      {/* <Proyects /> */}
      <Footer />
    </div>
  );
}

export default App;
