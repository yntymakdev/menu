import React, { useEffect } from "react";

const Orders = ({ readOrders, orders }) => {
  useEffect(() => {
    readOrders();
  }, []);
  return (
    <div>
      <div className="Order"></div>
    </div>
  );
};

export default Orders;
