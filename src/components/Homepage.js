import "../styles/styles.css";
import Navbar from "./Navbar";

import Button from "@mui/material/Button";
export default function Home() {
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
            Get in Touch
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
