import React from "react";

const headerStyle = {
  textAlign: "center",
  margin: 0,
  borderBottom: "1px solid black",
};
const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={{ margin: 0 }}>Carousel</h1>
    </header>
  );
};

export default Header;
