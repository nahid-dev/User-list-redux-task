import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UserContext } from "../../contextProvider/contextProvider";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Link } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useContext(UserContext);
  const data = useSelector((state) => {
    return state.data.users;
  });

  const user = data.find((item) => item.id === userId);

  return (
    <div className="min-h-screen">
      <ContentWrapper>
        <div className="pt-8 md:pt-0 md:my-10">
          <Link
            to="/"
            className="px-4 py-2 font-medium border rounded hover:border-blue-800 transition-all duration-300"
          >
            Back
          </Link>
        </div>
        <div className="my-20 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
            {/* Image area */}
            <div className="h-[500px]">
              <img
                className="object-cover h-full w-full rounded-xl"
                src={user?.picture}
                alt=""
              />
            </div>
            {/* Content area */}
            <div className="content flex items-center mt-10 lg:mt-0">
              <div className="space-y-3 md:space-y-5 w-full">
                <h3 className="text-2xl md:text-4xl lg:text-6xl mx-0">
                  {user?.name}
                </h3>
                <hr />
                <p className="font-medium md:text-lg">
                  Profession: {user?.profession}
                </p>
                <p className="font-medium md:text-lg">Email: {user?.email}</p>
                <p className="font-medium md:text-lg">
                  Contact Number: {user?.contact_number}
                </p>
                <p className="font-medium md:text-lg">Age: {user?.age}</p>
                <p className="font-medium md:text-lg">Gender: {user?.gender}</p>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default UserDetails;
