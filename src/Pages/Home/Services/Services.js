import React from "react";
import { Row } from "react-bootstrap";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();
  return (
    <div className="container py-5" id="services">
      <h2 className="text-center text-primary">Our Services</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
