import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";
import "./Gallery.css";
import Gal from "../assests/homeBG.jpg"

const Gallery = () => {
  return (
    <div className="galleryContainer">
        <h1 className="galleryHeader">
            Gallery
        </h1>
        <div className="line mb-4"></div>
        <Container>
        <div className="card-container row flex-wrap">

            <div className="col-sm-3 card-inner" >
              <Card className="card mt-4" >
                <Card.Img variant="top" src={Gal} />

              </Card>
            </div>
            <div className="col-sm-3 card-inner" >
              <Card className="card mt-4" >
                <Card.Img variant="top" src={Gal} />

              </Card>
            </div>
            <div className="col-sm-3 card-inner" >
              <Card className="card mt-4" >
                <Card.Img variant="top" src={Gal} />

              </Card>
            </div>
            <div className="col-sm-3 card-inner" >
              <Card className="card mt-4" >
                <Card.Img variant="top" src={Gal} />

              </Card>
            </div>
        </div>
      </Container>
      <button className="showBtn">Show More!</button>
    </div>
  )
}

export default Gallery