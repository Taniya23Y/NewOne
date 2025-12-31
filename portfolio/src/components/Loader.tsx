import React from "react";

export default function Loader() {
  const loaderStyle: React.CSSProperties = {
    display: "block",
    width: "130px",
    height: "4px",
    borderRadius: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    position: "relative",
  };

  const loaderBeforeStyle: React.CSSProperties = {
    content: '""',
    position: "absolute",
    backgroundColor: "#048985",
    top: "0",
    left: "0",
    width: "0%",
    height: "100%",
    borderRadius: "30px",
    animation: "moving 1s ease-in-out infinite",
  };

  return (
    <div style={loaderStyle}>
      <div style={loaderBeforeStyle}></div>
      <style>{`
        @keyframes moving {
          50% {
            width: 100%;
          }
          100% {
            width: 0;
            right: 0;
            left: unset;
          }
        }
      `}</style>
    </div>
  );
}
