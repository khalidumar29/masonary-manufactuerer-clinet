import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../../Components/CheckOutForm/CheckOutForm";
const stripePromis = loadStripe(
  "pk_test_51L0ve3AzWRukjgdx6sczebE33YoaCmfzHvm0RxLjyekZFawVsyV5QNIyCRZ2HQOi4oxY98koOESuTnVERgIcULhz00VpYfKBFB"
);
const Payment = () => {
  const { id } = useParams();
  const url = `https://shielded-mesa-62585.herokuapp.com/order/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className=''>
      <div className='card py-2 card-compact w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>{order.name}</h2>
          <p className='capitalize font-bold'>
            Order Quantity: {order.orderQuantity}
          </p>
          <p className='capitalize font-bold'>
            total ammount: {order.orderPrice}
          </p>
          <p className='capitalize font-bold'>
            Shipment Address: {order.address}
          </p>
          <p className='capitalize font-bold'>phone number: {order.phone}</p>
        </div>
      </div>
      <div className='card mt-10 card-compact w-96 bg-base-100 shadow-lg'>
        <div className='card-body'>
          <Elements stripe={stripePromis}>
            <CheckOutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
