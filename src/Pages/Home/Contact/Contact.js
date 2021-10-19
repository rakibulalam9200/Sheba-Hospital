import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="py-5">
      <div className="container middle-container pt-5 bg-dark" id="contact">
        <h2 className="text-light text-center py-2">Contact with us</h2>
        <FloatingLabel
          controlId="floatingInput"
          label="Enter your Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingName"
          label="Enter Your Name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Name" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingTextarea2"
          label="Comments"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <div className="py-3">
          <Button variant="info" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
