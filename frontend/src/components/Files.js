import React from "react";
import "./Files.css";
const Files = ({ click, imageData, checkClick }) => {
  let index = imageData.findIndex((x) => x.category === click);
  if (index === -1) {
    index = 0;
  }
  const runCallback = (cb) => {
    return cb();
  };
  function notClick() {
    if (!checkClick) {
      return <li>Click on the Categories to fetch Files</li>;
    } else {
      return runCallback(() => {
        const row = [];
        for (var i = 1; i <= 10; i++) {
          row.push(<li key={i}>{`${click}-${i}.png`}</li>);
        }
        return row;
      });
    }
  }
  return (
    <div>
      <h3 className="file_heading">Files</h3>
      <div className="file_names">
        <ul>{notClick()}</ul>
      </div>
    </div>
  );
};
export default Files;
