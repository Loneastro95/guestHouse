import Container from "react-bootstrap/Container";
import "./Room.css";
import Gal from "../assests/Rooms&Suits.png";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const navigate = useNavigate();

  const handleRoomNav = (room) => {
    navigate("/roomdetail", {state: room});
  };

  const rooms = [
    {
      id: 1,
      name: "Presidential Suite",
      description: `Experience the ultimate luxury in our spacious Presidential Suite,
                    featuring elegant decor, a king-size bed, private lounge area, and
                    breathtaking views. Perfect for those seeking sophistication and
                    comfort.`,
      image: Gal,
      price: 1500,
      details: { bed: "1 bed", people: "2 people", size: "1 room size" },
    },
    {
      id: 2,
      name: "Executive Room",
      description: `Stay in our luxurious Executive Room with a queen-size bed, modern
                    amenities, and a work area for business travelers.`,
      image: Gal,
      price: 1200,
      details: { bed: "1 bed", people: "2 people", size: "1 room size" },
    },
    {
      id: 3,
      name: "Executive Family Room",
      description: `Stay in our luxurious Executive Room with a queen-size bed, modern
                    amenities, and a work area for business travelers.`,
      image: Gal,
      price: 1800,
      details: { bed: "4 bed", people: "6-7 people", size: "1 room size" },
    },
  ];

  return (
    <div className="MainRoomContainer" id="rooms">
      <Container className="roomContainer">
        <h1>Rooms & Suits</h1>
        <div className="line2"></div>

        {rooms.map((room, index) => (
          <div
            key={room.id}
            className={`roomCard ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            {index % 2 === 0 ? (
              <>
                <img src={room.image} alt="room" className="roomImg" />
                <div className="cardInfo">
                  <h2 className="roomName">{room.name}</h2>
                  <div className="additionalInfo">
                    <p className="addText">{room.details.bed}</p>
                    <p className="addText">{room.details.people}</p>
                    <p className="addText">{room.details.size}</p>
                  </div>
                  <p className="roomPara">{room.description}</p>
                  <h2 className="price">
                    <span className="bold">R {room.price}</span> per night
                  </h2>
                  <button
                    className="roomDetailBtn"
                    onClick={() => handleRoomNav(room)}
                  >
                    Room Details
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="cardInfo">
                  <h2 className="roomName">{room.name}</h2>
                  <div className="additionalInfo">
                    <p className="addText">{room.details.bed}</p>
                    <p className="addText">{room.details.people}</p>
                    <p className="addText">{room.details.size}</p>
                  </div>
                  <p className="roomPara">{room.description}</p>
                  <h2 className="price">
                    <span className="bold">R {room.price}</span> per night
                  </h2>
                  <button
                    className="roomDetailBtn"
                    onClick={() => handleRoomNav(room)}
                  >
                    Room Details
                  </button>
                </div>
                <img src={room.image} alt="room" className="roomImg" />
              </>
            )}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Rooms;
