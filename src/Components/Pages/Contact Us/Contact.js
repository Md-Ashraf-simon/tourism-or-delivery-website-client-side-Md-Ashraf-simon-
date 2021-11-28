import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div className="Contat-header">
        <h2 className="text-center py-5 ">Contact Us</h2>
      </div>
      <div className="footer-card">
        <CardGroup>
          <Card className="m-3 single-card">
            <i className="fas fa-map-marker-alt pt-3"></i>
            <Card.Body>
              <Card.Title>
                {" "}
                <h5>Address </h5>{" "}
              </Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  971-949 8th Ave 949 <br /> New York, NY
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-3 single-card">
            <i className="fas fa-envelope-square pt-3"></i>
            <Card.Body>
              <Card.Title>
                {" "}
                <h5> Email & Phone </h5>
              </Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  (123) 456 7890 <br /> hello@gmail.com{" "}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-3 single-card">
            <i className="fas fa-share-alt pt-3"></i>
            <Card.Body>
              <Card.Title>
                {" "}
                <h5>Social Media </h5>{" "}
              </Card.Title>
              <Card.Text>
                <p>contect us on our social media</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>

      <div>
        <div className="container">
          <div>
            <div className="row mt-5">
              <div className="col-md-7">
                <div>
                  <h2>Contact Us</h2>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control py-3"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control py-3"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control py-3"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Subject Name"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Your Messege"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <button className=" btn contact-btn">Read More</button>
                </div>
              </div>
              <div className="col-md-5">
                <h2>Get In Touch</h2>
                <div>
                  <p className=" text-secondary">
                    our TourX Open Hour id sat to Thu At 10.00Am to 10.00PM and
                    our travelX Close Hour is in our Friday Office Close
                  </p>
                  <div className="my-4">
                    <i class="fs-1 far fa-clock"></i>
                    <h5 className="footer-h5" className="footer-h5">
                      Open Hour
                    </h5>
                    <p className="text-secondary">
                      Sat - Thu At <br /> 10.00Am to 10.00PM
                    </p>
                  </div>
                  <div>
                    <i class="fs-1 far fa-clock"></i>
                    <h5 className="footer-h5">Close Hour</h5>
                    <p className="text-secondary">Friday Office Close</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
