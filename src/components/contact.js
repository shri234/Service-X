import "../styles/navbar.css";
import Navbar from "./Navbar";
import "../styles/styles.css";
import Button from "@mui/material/Button";
export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contact">
        <h1>Contact Us</h1>
        <br></br>
        <h2>Do You Have a Project In Mind? Connect with Us</h2>
        <br></br>
        <div className="form">
          <form>
            <label
              style={{
                width: "50%",
                height: "70px",
                margin: "10%",
              }}
            >
              <b> Name: </b>
              <br></br>
              <input
                type="text"
                name="name"
                required
                style={{
                  width: "50%",
                  height: "30px",
                  marginLeft: "10%",
                }}
              />
            </label>
            <br></br>
            <label
              style={{
                width: "30%",
                height: "50px",
                margin: "10%",
                marginTop: "5%",
              }}
            >
              <b>Email ID: </b>
              <br></br>
              <input
                type="text"
                name="EmailID"
                required
                style={{
                  width: "50%",
                  height: "30px",
                  marginLeft: "10%",
                }}
              />
            </label>
            <br></br>
            <label
              style={{
                width: "30%",
                height: "50px",
                margin: "10%",
                marginTop: "5%",
              }}
            >
              <b>Company Name: </b>
              <br></br>
              <input
                type="text"
                name="EmailID"
                required
                style={{
                  width: "50%",
                  height: "30px",
                  marginLeft: "10%",
                }}
              />
            </label>
            <br></br>
            <label
              style={{
                width: "30%",
                height: "50px",
                margin: "10%",
                marginTop: "5%",
              }}
            >
              <b>Phone Number: </b>
              <br></br>
              <input
                type="text"
                name="EmailID"
                required
                style={{
                  width: "50%",
                  height: "30px",
                  marginLeft: "10%",
                }}
              />
            </label>
            <br></br>
            <Button
              classname="button"
              variant="contained"
              sx={{
                padding: "10px",
                margin: "3%",
                marginLeft: "10%",
              }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
