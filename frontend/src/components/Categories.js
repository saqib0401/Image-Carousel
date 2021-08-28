import React, { useEffect } from "react";
import axios from "axios";

const Categories = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cars")
      .then((response) => console.log(response.data));
  }, []);
  return (
    <div>
      <h3 style={{ margin: 0, paddingLeft: "1vw" }}>Categories</h3>
    </div>
  );
};

export default Categories;
