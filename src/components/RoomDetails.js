import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";
import DatePicker from "react-datepicker";
import "./RoomDetails.css";
import Img1 from "../assests/Gallery1.png";
import Img2 from "../assests/Gallery2.png";

const RoomDetails = () => {
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");

  const handleDateChange = (e) => {
    const { name, value } = e.target;

    if (name === "checkin") {
      setCheckinDate(value);
    } else if (name === "checkout") {
      setCheckoutDate(value);
    }
  };

  const handleSubmit = () => {
    if (new Date(checkoutDate) <= new Date(checkinDate)) {
      alert("Check-out date must be after check-in date.");
    } else {
      const checkin = new Date(checkinDate);
      const checkout = new Date(checkoutDate);
      const diffTime = Math.abs(checkout - checkin);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert time difference to days

      alert(`You will stay for ${diffDays} days.`);
    }
  };

  return (
    <div className="detailsContainer">
      <Container>
        <h1 className="roomDetailName">Deluxe Room</h1>
        <div className="imgContainer">
          <img src={Img1} alt="room detail image 1" />

          <div className="smallContainer">
            <div className="smallImgContainer">
              <img src={Img2} alt="room detail image 2" />
              <img src={Img2} alt="room detail image 2" />
            </div>
            <div className="smallImgContainer">
              <img src={Img2} alt="room detail image 2" />
              <img src={Img2} alt="room detail image 2" />
            </div>
          </div>
        </div>
        <div className="detailInfoContainer">
          <div className="detailInfo">
            <div className="additionalInfo">
              <p className="addText">1 bed</p>
              <p className="addText">2 people</p>
              <p className="addText">1 room size</p>
            </div>
            <p className="detailPara">
              Experience the ultimate luxury in our spacious Presidential Suite,
              featuring elegant decor, a king-size bed, private lounge area, and
              breathtaking views. Perfect for those seeking sophistication and
              comfort.
            </p>
            <h2 className="detailPrice">
              <span className="bold">R 1500</span> per night
            </h2>
            <div className="grayContainer mb-2"></div>
          </div>

          <div className="checkoutContainer">
            <div className="dateContainer">
              <div className="dateContainer">
                <div className="inputGroup">
                  <label htmlFor="checkin">Check-in</label>
                  <input
                    type="date"
                    className="date"
                    name="checkin"
                    id="checkin"
                    value={checkinDate}
                    onChange={handleDateChange}
                  />
                </div>
                <div className="inputGroup">
                  <label htmlFor="checkout">Check-out</label>
                  <input
                    type="date"
                    className="date"
                    name="checkout"
                    id="checkout"
                    value={checkoutDate}
                    onChange={handleDateChange}
                  />
                </div>
              </div>
            </div>
            <button className="checkoutBtn" onClick={handleSubmit}>
              Reserve Now!
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RoomDetails;
