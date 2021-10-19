import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useServices from "../../../hooks/useServices";

const ServiceInfo = ({ service }) => {
  const { serviceId } = useParams();
  console.log(typeof serviceId);
  const [services] = useServices([serviceId]);
  console.log(services);
  const serviceDetails = services.find(
    (service) => service.id === parseInt(serviceId)
  );

  return (
    <div className="container d-flex justify-content-center my-3">
      {serviceDetails && (
        <Card style={{ width: "24rem" }}>
          <Card.Img variant="top" src={serviceDetails.img} />
          <Card.Body>
            <Card.Title>{serviceDetails.name}</Card.Title>
            <Card.Text>{serviceDetails.des}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="fw-bold">
              Number of Employee/Lab: {serviceDetails.number}
            </ListGroupItem>
            <ListGroupItem className="fw-bold">
              Service Price: {serviceDetails.price}
            </ListGroupItem>
            <ListGroupItem>
              <span className="fw-bold">Service details:</span>{" "}
              {serviceDetails.details}
            </ListGroupItem>
          </ListGroup>
          <Card.Body className="text-center">
            <Link to="/home">
              <Button>Go Home</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ServiceInfo;
