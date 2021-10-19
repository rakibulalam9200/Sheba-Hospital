import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, des, number, price, img, id } = service;
  return (
    <div>
      <Card className="shadow rounded">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Title className="mb-2 text-muted">
            Total Number: {number}
          </Card.Title>
          <Card.Text className="text-warp">{des.slice(0, 150)}</Card.Text>
          <div className="d-flex justify-content-around my-2">
            <Card.Title className="mb-2 text-muted">Price: {price}</Card.Title>
          </div>

          <div className="d-flex justify-content-around my-2">
            <Button className="mx-5" variant="outline-dark">
              {" "}
              <i className="fas fa-cart-plus"></i> Add To Cart
            </Button>
            <Link to={`/service/${id}`}>
              <Button variant="outline-dark">Details</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
