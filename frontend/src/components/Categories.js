import React, { useEffect } from "react";
import axios from "axios";
import imageData from "../imagesData";
import "./Categories.css";

const Categories = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cars")
      .then((response) => console.log(response.data));
  }, []);
  return (
    <div>
      <h3 className="heading">Categories</h3>
      <ul className="btn-group">
        {imageData.map((item) => (
          <li key={item.category}>
            <button>{item.category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
