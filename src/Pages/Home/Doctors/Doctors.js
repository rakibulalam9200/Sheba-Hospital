import React from "react";
import { Row } from "react-bootstrap";
import useDoctors from "../../../hooks/useDoctor";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors] = useDoctors();
  console.log(doctors);
  return (
    <div className="container py-5" id="doctors">
      <h2 className="text-center text-primary py-2">Our Doctors</h2>
      <Row xs={1} md={3} lg={4} className="g-4">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </Row>
    </div>
  );
};

export default Doctors;
