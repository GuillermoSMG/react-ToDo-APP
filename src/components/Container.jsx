import React from "react";

function Container({ children }) {
  return (
    <div className="container bg-dark p-4 col-md-4 offset-md-4">{children}</div>
  );
}

export default Container;
