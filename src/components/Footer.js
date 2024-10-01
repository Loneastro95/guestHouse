import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faXTwitter,
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faArrowLeft,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      
      <Container className="footerCard">
        <h1 className="footerHeader">GuestHouse</h1>
        <div className="card-container row flex-wrap">
          <div className="col-sm-3 card-inner">
            <h2 className="footerInfo">Address</h2>
            <p>Kimberley, 8300</p>
          </div>
          <div className="col-sm-3 card-inner homeAbout">
            <h2 className="footerInfo">Home</h2>
            <h2 className="footerInfo">About</h2>
            <h2 className="footerInfo">Rooms</h2>
          </div>
          <div className="col-sm-3 card-inner">
            <h2 className="footerInfo">Contact</h2>
            <p>+27 21 424 9803</p>
            <p>guestHouse@gmail.com</p>
            <div className="social-icons">
              <a
                href="https://www.tiktok.com/@gigartzapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTiktok} size="2x" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61565721012297"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/gigartzapp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/gigartz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
          <div className="col-sm-3 card-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223927.58561446946!2d24.558399407735003!3d-28.723474905732207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9b1ad062e77929%3A0x8f2628a37deb89ff!2sKimberley!5e0!3m2!1sen!2sza!4v1727786007385!5m2!1sen!2sza"
              width="80%"
              height="180"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
          </div>
        </div>
        <div className="line3 mt-4"></div>
        <p className="copy mt-4">2020 GuestHouse. All rights reserved</p>
      </Container>
    </div>
  );
};

export default Footer;
