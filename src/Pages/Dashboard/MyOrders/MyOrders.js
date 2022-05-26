import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyOrders = () => {
  const [myOrder, setMyOrder] = useState([]);
  const [user] = useAuthState(auth);
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/order`)
      .then((res) => res.json())
      .then((data) => {
        const filter = data.filter((d) => d.email === user.email);
        setMyOrder(filter);
      });
  }, [user, myOrder]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/order/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div class='overflow-x-auto '>
      <table class='table table-compact w-[95%] mt-8'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Address</th>
            <th>price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myOrder.map((order, index) => (
            <tr key={order._id}>
              <th>{index + 1}</th>
              <td>{order.productName}</td>
              <td>dhaka,rajbari</td>
              <td>{order.orderPrice}</td>
              <td>{order.orderQuantity}</td>
              <td>
                <button className='btn btn-xs btn-success'>pay</button>
                <label
                  onClick={() => handleDelete(order._id)}
                  for='my-modal-30'
                  className='btn btn-xs btn-error ml-3'
                >
                  cancel
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <!-- The button to open modal --> */}
      {/* <!-- Put this part before </body> tag --> */}
      <input type='checkbox' id='my-modal-3' class='modal-toggle' />
      <div class='modal'>
        <div class='modal-box relative'>
          <label
            for='my-modal-3'
            class='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 class='text-2xl font-bold'>Are You Sure</h3>
          <button
            onClick={() => setAgree(true)}
            className='btn btn-error btn-outline'
          >
            ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
