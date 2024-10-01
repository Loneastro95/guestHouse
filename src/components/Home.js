import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Home.css";

function Home() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="mainContainer">
      <Navbar expand="lg nav" >
        <Container className="navContainer">
          <Navbar.Brand href="#home" className="navText">GuestHouse</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="#home" 
              className={`nav-link ${activeTab === 'Home' ? 'active' : ''} navText link`} 
              onClick={() => setActiveTab('Home')}>Home</Nav.Link>
              <Nav.Link href="#rooms" className={`nav-link ${activeTab === 'Rooms' ? 'active' : ''} navText link`} 
              onClick={() => setActiveTab('Rooms')}>Rooms</Nav.Link>
              <Nav.Link href="#about" className={`nav-link ${activeTab === 'About' ? 'active' : ''} navText link`} 
              onClick={() => setActiveTab('About')}>About</Nav.Link>
              <Nav.Link href="#contact" className={`nav-link ${activeTab === 'Contact' ? 'active' : ''} navText link`} 
              onClick={() => setActiveTab('Contact')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="contentContainer" id="home">
        <h1 className="contentText">More Than a Stay, It's an Experience.</h1>
        <button className="reserveBtn">Reserve Now!</button>
      </Container>
    </div>
  );
}

export default Home;
