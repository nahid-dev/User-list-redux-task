import React from "react";
import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center text-center h-screen">
      <BarLoader></BarLoader>
    </div>
  );
};

export default Loader;
