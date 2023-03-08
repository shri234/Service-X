import "../styles/navbar.css";
import Navbar from "./Navbar";
import "../styles/styles.css";
export default function Team() {
  return (
    <div>
      <Navbar />
      <br></br>
      <div className="team">
        <h1>Our Team</h1>
      </div>
      <div className="avatar">
        <div className="column">
          <img src="avatar.jpg" alt="Avatar" class="avatar"></img>
          <br></br>
          <h2>Hariharan L</h2>
          <br></br>
          <h3>Software Architect</h3>
        </div>
        <div className="column">
          <img src="avatar.jpg" alt="Avatar" class="avatar"></img>
          <br></br>
          <h2>Charan R</h2>
          <br></br>
          <h3>Director</h3>
        </div>
      </div>
    </div>
  );
}
