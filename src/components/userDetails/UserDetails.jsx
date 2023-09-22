import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UserContext } from "../../contextProvider/contextProvider";

const UserDetails = () => {
  const { userId } = useContext(UserContext);
  const data = useSelector((state) => {
    return state.data.users;
  });

  const user = data.find((item) => item.id === userId);

  console.log(user.name);

  return <div>{user.name}</div>;
};

export default UserDetails;
