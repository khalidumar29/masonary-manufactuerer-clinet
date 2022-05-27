import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import UseAdmin from "../../../Hooks/useAdmin/useAdmin";
import Loading from "../../../Shared/Loading/Loading";

const AllUser = () => {
  const [user] = useAuthState(auth);
  const [admin] = UseAdmin(user);
  const {
    isLoading,
    data: users,
    refetch,
  } = useQuery("user", () =>
    fetch("https://shielded-mesa-62585.herokuapp.com/user").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  const makeAdmin = (email) => {
    console.log(email);
    fetch(`https://shielded-mesa-62585.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json)
      .then((data) => {
        refetch();
        console.log(data);
        toast.success(`Successfully made an admin`);
      });
  };
  return (
    <div>
      <h1 className='text-center text-2xl text-primary my-4'>All User</h1>
      <div className='overflow-x-auto'>
        <table className='table md:w-[90vw]'>
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._key}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>
                  {!admin && (
                    <button
                      onClick={() => makeAdmin(user.email)}
                      className='btn btn-xs'
                    >
                      make admin
                    </button>
                  )}
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
