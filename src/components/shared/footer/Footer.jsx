import React from "react";
import ContentWrapper from "../../contentWrapper/ContentWrapper";

const Footer = () => {
  return (
    <>
      <div className="border-t bg-black text-white py-5">
        <ContentWrapper>
          <div className="text-center">
            <p>
              &copy; 2023 All Rights Reserved By{" "}
              <span className="text-yellow-500">Nahid</span>
            </p>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default Footer;
