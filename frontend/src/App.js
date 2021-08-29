import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Files from "./components/Files";

function App() {
  const [categoryData, setCategoryData] = useState([
    { category: "Landscapes", images: [] },
    { category: "Phones", images: [] },
    { category: "Beaches", images: [] },
    { category: "Houses", images: [] },
    { category: "Mountains", images: [] },
    { category: "Stars", images: [] },
    { category: "Clouds", images: [] },
    { category: "Trees", images: [] },
    { category: "Flowers", images: [] },
    { category: "Laptops", images: [] },
  ]);
  const [click, setClick] = useState("");
  const [checkClick, setCheckClick] = useState(false);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Categories
          imageData={categoryData}
          setImageData={setCategoryData}
          setClick={setClick}
          setCheckClick={setCheckClick}
        />
        <Files click={click} imageData={categoryData} checkClick={checkClick} />
        {console.log(click)}
      </div>
    </div>
  );
}

export default App;
