import "./App.css";
import "./components/Button.css";
import { Router, Routes, Link } from "react-router-dom";
import Section from "./components/Section";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Section />
      {/* <div className="type-of-climb">hard</div>
      <div className="areas">wet</div> */}

      {/* <button>let's go!</button> */}

      {/* <result></result> */}
    </div>
  );
}

export default App;
