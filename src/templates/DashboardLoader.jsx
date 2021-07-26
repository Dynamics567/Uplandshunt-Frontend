import React from "react";

const DashboardLoader = () => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 right-0 bottom-0 z-10 overlay">
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default DashboardLoader;
