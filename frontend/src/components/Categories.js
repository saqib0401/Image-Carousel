import React from "react";
import axios from "axios";
import "./Categories.css";

const Categories = ({
  imageData,
  setImageData,
  setClick,
  setCheckClick,
  setCarouselData,
}) => {
  function handleClick(category) {
    let state = imageData;
    let index = state.findIndex((x) => x.category === category);
    let slideData = imageData[index].images;
    axios
      .get(`http://localhost:5000/api/${category}`)
      .then((response) => state[index].images.push(...response.data));
    setImageData(state);
    setCarouselData(slideData);
    console.log(imageData);
    setClick(category);
    setCheckClick(true);
  }

  return (
    <div>
      <h3 className="heading">Categories</h3>
      <ul className="btn-group">
        {imageData.map((item) => (
          <li key={item.category}>
            <button onClick={() => handleClick(item.category)}>
              {item.category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
