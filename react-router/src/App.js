import "./App.css";
import { Routes, BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import Start from "./component/Start";
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <nav>
          <Link className="navM" to="/">
            Home
          </Link>
          <Link className="navM" to="/about">
            About
          </Link>
          <Link className="navM" to="/contact">
            Contact
          </Link>
        </nav> */}
        <nav>
          <NavLink className="navM" to="/">
            Home
          </NavLink>
          <NavLink className="navM" to="/about">
            About
          </NavLink>
          <NavLink className="navM" to="/contact">
            Contact
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
