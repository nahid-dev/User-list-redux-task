import React from "react";
import ContentWrapper from "../../contentWrapper/ContentWrapper";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ContentWrapper>
        <div>
          <div>
            <Link className="text-xl font-semibold">Navbar</Link>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Navbar;
