import "../styles/styles.css";
import Navbar from "./Navbar";
import Button from "@mui/material/Button";
export default function Home() {
  return (
    <div>
      <Navbar />
      <br></br>

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
              padding: "8px",
              margin: "8px",
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
        <br></br>

        {/* <h2>Services We Offer</h2> */}
      </div>
      <div className="search">
        <p>
          Searching for a Good Service Company?<br></br>Come to us
        </p>
        <textarea>
          We Bumbble Bee Private limited offers you with great support and
          services for your current and future products. We provide with IT
          solutions and Infrastructure. We provide you with a marvelous team for
          Development for your product and we deliver it on time with
          deliverables fixed bys us as milestones
        </textarea>
        <br></br>
        <h2>Our Clients</h2>
      </div>
    </div>
  );
}
