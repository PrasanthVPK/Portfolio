import { useEffect } from "react";
import "./App.css";
import "./assets/css/style.css";
import PortfolioApp from "./component/PortfolioApp.tsx";

function App() {
  useEffect(() => {
    const setHeight = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight}px`
      );
    };
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  return (
    <>
      <div className="App-header">
        <PortfolioApp />

        {/* <Router>
          <Routes>
            <Route path="/about" element={
              <div className="col-lg-5 col-sm-6 d-flex justify-content-center p-5">
                <div className="hexagon">
                  <img
                    src="/assets/images/about1.png"
                    alt=""
                    className="aboutImageStyles"
                  />
                </div>
              </div>
            } />
          </Routes>
        </Router> */}
      </div>
    </>
  );
}

export default App;
