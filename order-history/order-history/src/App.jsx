import React from "react";
import orders from "./data/orders.json";

const OrderCard = ({ order }) => {
  const statusColor = order.status.toLowerCase() === "delivered" ? "text-green-600" : "text-red-600";
  return (
    <div className="flex items-center justify-between border p-4 mb-4 shadow-sm rounded-lg">
      <div className="flex items-center space-x-4">
        <img src={order.image} alt="product" className="w-20 h-20 object-cover rounded" />
        <div>
          <p className="font-semibold">Order Number</p>
          <p>{order.ordernumber}</p>
        </div>
        <div>
          <p className="font-semibold">Purchased</p>
          <p>{order.purchasedon}</p>
        </div>
        <div>
          <p className="font-semibold">Quantity</p>
          <p>x{order.quantity}</p>
        </div>
        <div>
          <p className="font-semibold">Total</p>
          <p>${order.total}</p>
        </div>
        <div>
          <p className="font-semibold">Status</p>
          <p className={statusColor}>{order.status}</p>
        </div>
      </div>
      <button className="border border-pink-500 text-pink-500 px-4 py-1 rounded hover:bg-pink-100">
        View Order
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {orders.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
    </div>
  );
};

export default App;