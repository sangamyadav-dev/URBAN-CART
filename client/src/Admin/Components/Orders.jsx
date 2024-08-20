// import React from 'react';

const orders = [
  { id: '001', customer: 'John Doe', product: 'Laptop', quantity: 1, price: 1200, status: 'Shipped' },
  { id: '002', customer: 'Jane Smith', product: 'Smartphone', quantity: 2, price: 800, status: 'Processing' },
  { id: '003', customer: 'Alice Johnson', product: 'Headphones', quantity: 1, price: 150, status: 'Delivered' },
  // Add more orders as needed
];

const Orders = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-gray-600">Order ID</th>
              <th className="px-6 py-3 text-left text-gray-600">Customer</th>
              <th className="px-6 py-3 text-left text-gray-600">Product</th>
              <th className="px-6 py-3 text-left text-gray-600">Quantity</th>
              <th className="px-6 py-3 text-left text-gray-600">Price</th>
              <th className="px-6 py-3 text-left text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="px-6 py-4 text-gray-700">{order.id}</td>
                <td className="px-6 py-4 text-gray-700">{order.customer}</td>
                <td className="px-6 py-4 text-gray-700">{order.product}</td>
                <td className="px-6 py-4 text-gray-700">{order.quantity}</td>
                <td className="px-6 py-4 text-gray-700">${order.price}</td>
                <td className="px-6 py-4 text-gray-700">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      order.status === 'Shipped' ? 'bg-green-200 text-green-800' :
                      order.status === 'Processing' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-blue-200 text-blue-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
