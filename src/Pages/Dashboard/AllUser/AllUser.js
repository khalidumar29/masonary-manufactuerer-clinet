import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";

const AllUser = () => {
  const { isLoading, data: users } = useQuery("user", () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className='text-center text-2xl text-primary my-4'>All User</h1>
      <div class='overflow-x-auto'>
        <table class='table md:w-[90vw]'>
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>
                  <button className='btn btn-xs'>make admin</button>
                  <button className='btn btn-xs ml-2'>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
