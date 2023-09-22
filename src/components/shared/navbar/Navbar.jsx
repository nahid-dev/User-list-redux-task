import React from "react";
import ContentWrapper from "../../contentWrapper/ContentWrapper";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-800 text-white">
      <ContentWrapper>
        <div className="flex items-center justify-between p-2">
          <div>
            <Link className="text-xl font-semibold">Navbar</Link>
          </div>
          <div>
            <button className="px-4 py-2 font-medium border rounded">
              All Users
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Navbar;
