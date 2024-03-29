import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const MyOrders = () => {
  const [myOrder, setMyOrder] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`https://masonary-server.onrender.com/review/order`)
      .then((res) => res.json())
      .then((data) => {
        const filter = data.filter((d) => d.email === user.email);
        setMyOrder(filter);
      });
  }, [user, myOrder]);

  const handleDelete = (id) => {
    fetch(`https://masonary-server.onrender.com/review/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className='overflow-x-auto '>
      <table className='table table-compact w-[95%] mt-8'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Address</th>
            <th>price</th>
            <th>Quantity</th>
            <th>Trxid & Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {myOrder.map((order, index) => (
            <tr key={order._id}>
              <th>{index + 1}</th>
              <td>{order.productName}</td>
              <td>{order.adress}</td>
              <td>{order.orderPrice}</td>
              <td>{order.orderQuantity}</td>
              <td>
                {order.paid ? (
                  <span className='text-xs text-success'>{order.trxid}</span>
                ) : (
                  <Link
                    to={`/dashboard/payment/${order._id}`}
                    className='btn btn-xs btn-success'
                  >
                    pay
                  </Link>
                )}
                {!order.paid && (
                  <label
                    onClick={() => handleDelete(order._id)}
                    htmlFor='my-modal-30'
                    className='btn btn-xs btn-error ml-3'
                  >
                    cancel
                  </label>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <!-- The button to open modal --> */}
      {/* <!-- Put this part before </body> tag --> */}
      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='my-modal-3'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='text-2xl font-bold'>Are You Sure</h3>
          <button className='btn btn-error btn-outline'>ok</button>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
