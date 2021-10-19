import { useEffect, useState } from "react";
// create useServices hook
const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const url = "/doctors.JSON";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return [doctors, setDoctors];
};

export default useDoctors;