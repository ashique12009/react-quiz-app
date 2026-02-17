import React from "react";

const Toaster = ({ message }) => {
  return (
    <div className="toaster text-center">
      <p>{message}</p>
    </div>
  );
};

export default Toaster;
