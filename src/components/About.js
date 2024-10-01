import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./About.css";

const About = () => {
  return (
    <Container className="aboutContainer" id="about">
      <h1 className="aboutHeader">About Us</h1>
      <div className="aboutContentContainer">
        <p className="aboutText">
          Welcome to our guest house, where comfort and personalized service
          come together for a memorable stay. We offer a variety of
          well-appointed rooms, each equipped with modern amenities for your
          convenience and relaxation.
        </p>
        <p className="aboutText">
          Whether you're visiting for leisure or business, our tranquil setting
          and attentive staff ensure a restful experience. Let us provide you
          with the perfect retreat during your stay.
        </p>
      </div>
      <button className="showMoreBtn">Show More</button>
    </Container>
  );
};

export default About;
