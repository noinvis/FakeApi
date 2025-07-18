import React from "react";

const Skeleton = () => {
  return (
    <div className="wrapper">
      {Array(20)
        .fill()
        .map((_, inx) => (
          <div key={inx} className="skeleton">
            <div></div>
            <div className="text"></div>
            <div className="price"></div>
          </div>
        ))}
    </div>
  );
};

export default Skeleton;
