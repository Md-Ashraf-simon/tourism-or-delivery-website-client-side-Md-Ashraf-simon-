import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import imgOne from "../../../image/reviewer-1.07859027.png";
import imgtwo from "../../../image/reviewer-2.52e03342.png";
import imgthree from "../../../image/reviewer-3.21d99f5c.png";

const Raiting = () => {
  return (
    <div>
      <div className="heading text-center py-5">
        <h5>Our Traveller Say</h5>
        <h2>What Oue Traveller Say About Us</h2>
      </div>
      <div className="main">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={imgOne} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={imgtwo} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img className="rat-img" variant="top" src={imgthree} />
            <Card.Body>
              <Card.Title>Traveller</Card.Title>
              <Card.Text>
                Fusce aliquam luctus est, eget tincidunt velit scelerisque
                rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec,
                mattis mauris.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Dina Jems</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Raiting;
