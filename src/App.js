import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/About/About.tsx";
import Experience from "./component/Experience/Experience.tsx";
import PortfolioApp from "./component/PortfolioApp.tsx";
import './App.css';
import './assets/css/style.css';
import Project from "./component/Project/Project.tsx";
import Contact from "./component/Contact/Contact.tsx";

function App() {
  return (
    <>
      <div className='App-header'>
        <PortfolioApp />
{/* 
        <Router>
          <Routes>
            <Route path="/about" element={
              <div id="contact-section" className="container pt-5 pb-5 ps-4 pe-4">
                <Contact />
              </div>
            } />
          </Routes>
        </Router> */}
      </div>
    </>
  );
}

export default App;
