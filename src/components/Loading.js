import React from "react";

const Loading = (props) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      class="d-flex justify-content-center align-items-center"
    >
      <div
        style={{
          width: "150px",
          height: "150px",
        }}
        class="d-flex justify-content-center align-items-center spinner-grow text-secondary"
        role="status"
      >
        <span class=" text-light ">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
