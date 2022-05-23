import React from "react";
import notFoundImage from "../../assets/images/notfound.jpg";
const NotFound = () => {
  return (
    <div className="w-full">
      <img className="w-full" src={notFoundImage} alt="" />
    </div>
  );
};

export default NotFound;
