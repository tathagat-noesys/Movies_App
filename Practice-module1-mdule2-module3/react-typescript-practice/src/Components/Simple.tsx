import React, { createElement } from "react";

const Simple = () => {
  return React.createElement(
    "h2",
    { style: { backgroundColor: "red", color: "whitesmoke" } },
    "Clock Timer"
  );
};

export default Simple;
