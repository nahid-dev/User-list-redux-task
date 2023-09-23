import React, { useEffect } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../Redux/features/users/userSlice";
import UserCard from "../userCard/userCard";
import Loader from "../LoadingBar/Loader";

const AllUsers = () => {
  const data = useSelector((state) => {
    return state.data;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <div className="md:my-20">
      <ContentWrapper>
        <div className="h-[100px] md:h-[0px]"></div>
        {data.loading && <Loader></Loader>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-y-10">
          {/* map the all users */}
          {data?.users.map((user) => (
            // singe user card here
            <UserCard key={user.id} user={user}></UserCard>
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default AllUsers;
