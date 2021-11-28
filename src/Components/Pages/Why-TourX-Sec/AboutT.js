import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./AboutT.css";

const AboutT = () => {
  return (
    <div className="full-area">
      <div className="sec-header text-center my-3">
        <h5>Why Tourx?</h5>
        <h2>Why you are travel with tourx</h2>
      </div>
      <div classNam="mt-5">
        <CardGroup>
          <Card className="mx-3 py-5 m-3 bg-success text-light">
            <i class="far fa-address-book fs-2 text-center"></i>
            <Card.Body>
              <Card.Title className="text-center">
                2000+ Our worldwide guide
              </Card.Title>
            </Card.Body>
          </Card>
          <Card className="mx-3 py-5 m-3 bg-success text-light">
            <i class="fas fa-route fs-2 text-center"></i>
            <Card.Body>
              <Card.Title className="text-center">
                100% trusted travel agency
              </Card.Title>
            </Card.Body>
          </Card>
          <Card className="mx-3 py-5 m-3 bg-success text-light">
            <i class="fas fa-head-side-virus fs-2 text-center"></i>
            <Card.Body>
              <Card.Title className="text-center">
                10+ year of travel experience
              </Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default AboutT;
