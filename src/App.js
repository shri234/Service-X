import Navbar from "./components/Navbar";
import "./styles.css";
import Button from "@mui/material/Button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import Contact from "./components/contact";
import Home from "./components/Homepage";
import About from "./components/about";
import Team from "./components/team";
function App() {
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exxact path="/about" element={<About />} />
        <Route exxact path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>,
    rootElement
  );
  return (
    <div class="bg_image">
      <Navbar />
      <div className="container">
        <article>
          <h1>
            We provide support on creating products. Website Development, Mobile
            App Development
          </h1>
          <br></br>
          <Button
            classname="button"
            variant="contained"
            sx={{
              padding: "10px",
              margin: "10px",
              marginLeft: "0px",
            }}
          >
            Get Touch
          </Button>
        </article>

        <img
          src="./image.jpg"
          alt="Profile"
          style={{ marginTop: "2%", display: "inline-block;" }}
        ></img>
      </div>
    </div>
  );
}

export default App;
