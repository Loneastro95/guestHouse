import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Home.css";

function Home() {
  return (
    <div className="mainContainer">
      <Navbar expand="lg" >
        <Container className="navContainer">
          <Navbar.Brand href="#home" className="navText">GuestHouse</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="#home" className="navText link">Home</Nav.Link>
              <Nav.Link href="#rooms" className="navText link">Rooms</Nav.Link>
              <Nav.Link href="#about" className="navText link">About</Nav.Link>
              <Nav.Link href="#contact" className="navText link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="contentContainer">
        <h1 className="contentText">More Than a Stay, It's an Experience.</h1>
        <button className="reserveBtn">Reserve Now!</button>
      </Container>
    </div>
  );
}

export default Home;
