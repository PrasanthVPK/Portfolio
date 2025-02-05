import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/About/About.tsx";
import Experience from "./component/Experience/Experience.tsx";
import PortfolioApp from "./component/PortfolioApp.tsx";
import './App.css';
import './assets/css/style.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <div className='App-header'>
        <PortfolioApp />
      </div>
    </>
  );
}

export default App;
