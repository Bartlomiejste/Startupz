import React from "react";

const ErrorBoundaryUI = () => {
  return (
    <h1
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        color: "#fff",
      }}
    >
      Error 404 - try refreshing the page
    </h1>
  );
};

export default ErrorBoundaryUI;
