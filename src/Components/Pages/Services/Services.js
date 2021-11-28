// import React, { useEffect, useState } from "react";
// import { Container, Row } from "react-bootstrap";

// import Service from "../Service/Service";

const Services = () => {
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("./fakeData.json")
  //     //    ./fakeData/Data.json
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  return (
    <div>
      {/* <Container>
        <div id="services">
          <h2 className="text-primary mt-5 mb-5 text-center">Our services</h2>
          <div className="service-container">
            <Row className="gy-4">
              {services.map((service) => (
                <Service key={service.id} service={service}></Service>
              ))}
            </Row>
          </div>
        </div>
      </Container> */}
    </div>
  );
};

export default Services;
