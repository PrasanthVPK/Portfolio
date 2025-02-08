import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/About/About.tsx";
import Experience from "./component/Experience/Experience.tsx";
import PortfolioApp from "./component/PortfolioApp.tsx";
import './App.css';
import './assets/css/style.css';
import Project from "./component/Project/Project.tsx";

function App() {
  return (
    <>
      <div className='App-header'>
        <PortfolioApp />
      </div>

      <Router>
        <div className='App-header'>
          <Routes>
            <Route path="/about" element={<Project />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
