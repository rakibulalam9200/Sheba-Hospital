import React from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const Doctor = ({ doctor }) => {
  const { name, department, visitingTime, visitingDay, fee, img } = doctor;
  return (
    <Col>
      <Card className="shadow rounded">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Title className="mb-2 text-muted">
            Department: {department}
          </Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="fw-bold">
              Visiting time: {visitingTime}
            </ListGroupItem>
            <ListGroupItem className="fw-bold">
              Visiting Day: {visitingDay}
            </ListGroupItem>
          </ListGroup>
          <div className="d-flex justify-content-around my-2">
            <Card.Title className="mb-2 text-muted">Price: {fee}</Card.Title>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Doctor;
