import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";
import "./Room.css";
import Gal from "../assests/Rooms&Suits.png";

const Rooms = () => {
  return (
    <div className="MainRoomContainer" id="rooms">
        <Container className="roomContainer">
          <h1>Rooms & Suits</h1>
          <div className="line2"></div>
          <div className="roomCard">
            <img src={Gal} alt="room image" className="roomImg" />
            <div className="cardInfo">
              <h2 className="roomName">Presidential Suite</h2>
              <div className="additionalInfo">
                <p className="addText">1 bed</p>
                <p className="addText">2 people</p>
                <p className="addText">1 room size</p>
              </div>
              <p className="roomPara">
                Experience the ultimate luxury in our spacious Presidential Suite,
                featuring elegant decor, a king-size bed, private lounge area, and
                breathtaking views. Perfect for those seeking sophistication and
                comfort.
              </p>
              <h2 className="price">
                <span className="bold">R 1500</span> per night
              </h2>
              <button className="roomDetailBtn">Room Details</button>
            </div>
          </div>
          <div className="roomCard reverse">
           
            <div className="cardInfo">
              <h2 className="roomName">Presidential Suite</h2>
              <div className="additionalInfo">
                <p className="addText">1 bed</p>
                <p className="addText">2 people</p>
                <p className="addText">1 room size</p>
              </div>
              <p className="roomPara">
                Experience the ultimate luxury in our spacious Presidential Suite,
                featuring elegant decor, a king-size bed, private lounge area, and
                breathtaking views. Perfect for those seeking sophistication and
                comfort.
              </p>
              <h2 className="price">
                <span className="bold">R 1500</span> per night
              </h2>
              <button className="roomDetailBtn">Room Details</button>
            </div>
            <img src={Gal} alt="room image" className="roomImg" />
          </div>

          <div className="roomCard">
            <img src={Gal} alt="room image" className="roomImg" />
            <div className="cardInfo">
              <h2 className="roomName">Presidential Suite</h2>
              <div className="additionalInfo">
                <p className="addText">1 bed</p>
                <p className="addText">2 people</p>
                <p className="addText">1 room size</p>
              </div>
              <p className="roomPara">
                Experience the ultimate luxury in our spacious Presidential Suite,
                featuring elegant decor, a king-size bed, private lounge area, and
                breathtaking views. Perfect for those seeking sophistication and
                comfort.
              </p>
              <h2 className="price">
                <span className="bold">R 1500</span> per night
              </h2>
              <button className="roomDetailBtn">Room Details</button>
            </div>
          </div>

          <div className="roomCard reverse">
            <div className="cardInfo">
              <h2 className="roomName">Presidential Suite</h2>
              <div className="additionalInfo">
                <p className="addText">1 bed</p>
                <p className="addText">2 people</p>
                <p className="addText">1 room size</p>
              </div>
              <p className="roomPara">
                Experience the ultimate luxury in our spacious Presidential Suite,
                featuring elegant decor, a king-size bed, private lounge area, and
                breathtaking views. Perfect for those seeking sophistication and
                comfort.
              </p>
              <h2 className="price">
                <span className="bold">R 1500</span> per night
              </h2>
              <button className="roomDetailBtn">Room Details</button>
            </div>
            <img src={Gal} alt="room image" className="roomImg" />
          </div>
          
        </Container>
    </div>
  );
};

export default Rooms;
