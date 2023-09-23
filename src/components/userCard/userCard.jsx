import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contextProvider/contextProvider";

const UserCard = ({ user }) => {
  const { setUserId } = useContext(UserContext);
  return (
    <div className="border cursor-pointer text-center shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] rounded-xl my-5 md:my-10 p-5">
      <div className="flex flex-col items-center gap-5 ">
        <div className="h-[100px] w-[100px]  -mt-[4.5rem]">
          <img
            className="object-cover h-[100px] w-[100px] rounded-full"
            src={user.picture}
            alt="User Image"
          />
        </div>
        <div className="space-y-5">
          <h2 className="font-bold text-xl">{user.name}</h2>
          <p className="font-medium">Email: {user.email}</p>
          <div>
            <Link
              onClick={() => setUserId(user.id)}
              to={`/details/${user.id}`}
              className="bg-blue-800 text-white px-4 py-1 rounded"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
