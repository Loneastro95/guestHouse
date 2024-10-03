import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./RoomDetails.css";
import Img1 from "../assests/Gallery1.png";
import Img2 from "../assests/Gallery2.png";
import emailjs from "emailjs-com";

const RoomDetails = () => {
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const location = useLocation();
  const data = location.state;
  console.log(data);

  // Function to send email using EmailJS
  const sendReservation = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      check_in: checkinDate,
      check_out: checkoutDate,
    };

    emailjs
      .send(
        "service_xxfd13c", // Service ID
        "template_qwffkwf", // Template ID
        templateParams,
        "Gy8lOEiYSz7k8wPUQ" // User ID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === "checkin") {
      setCheckinDate(value);
    } else if (name === "checkout") {
      setCheckoutDate(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (new Date(checkoutDate) <= new Date(checkinDate)) {
      alert("Check-out date must be after check-in date.");
    } else {
      sendReservation(e); // Send email on successful reservation
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
        <h1 className="roomDetailName">{data.name}</h1>
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
              <p className="addText">{data.details.bed}</p>
              <p className="addText">{data.details.people}</p>
              <p className="addText">{data.details.size}</p>
            </div>
            <p className="detailPara">
              {data.description}
            </p>
            <h2 className="detailPrice">
              <span className="bold">R {data.price}</span> per night
            </h2>
            <div className="grayContainer mb-2"></div>
          </div>

          <div className="checkoutContainer">
            <form onSubmit={handleSubmit}>
            <div className="dateContainer">
                <div className="inputGroup">
                  <label htmlFor="Name">Name</label>
                  <input
                    type="text"
                    className="date"
                    placeholder="Enter name..."
                    name="name"
                    id="name"
                    value={name}
                    onChange={((e) => setName(e.target.value))}
                    required
                  />
                </div>
                <div className="inputGroup">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="date"
                    placeholder="Enter email..."
                    name="email"
                    id="email"
                    value={email}
                    onChange={((e) =>setEmail(e.target.value))}
                    required
                  />
                </div>
              </div>

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
                    required
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
                    required
                  />
                </div>
              </div>

              <button className="checkoutBtn mt-4" type="submit">
                Reserve Now!
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RoomDetails;
