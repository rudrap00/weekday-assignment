import React from "react";

const Loading = () => {
  const loadingStyle = {
    height: "35.25rem",
    width: "100%",
    borderRadius: "1rem",
    boxShadow: "0 0 2px 1px #e8e6e6",
    backgroundColor: "#cdcccc53",
  };
  return <div style={loadingStyle}></div>;
};

export default Loading;
