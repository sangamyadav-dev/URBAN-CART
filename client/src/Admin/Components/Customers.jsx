// import React from 'react';
import { Link } from 'react-router-dom';

// Sample customer data
const customers = [
  { id: '001', name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Active' },
  { id: '002', name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', status: 'Inactive' },
  { id: '003', name: 'Alice Johnson', email: 'alice@example.com', phone: '456-789-0123', status: 'Active' },
  // Add more customers as needed
];

const CustomersPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <div className="mb-4">
        <Link
          to="/Admin/AddCustomer"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add New Customer
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-gray-600">ID</th>
              <th className="px-6 py-3 text-left text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-gray-600">Email</th>
              <th className="px-6 py-3 text-left text-gray-600">Phone</th>
              <th className="px-6 py-3 text-left text-gray-600">Status</th>
              <th className="px-6 py-3 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b">
                <td className="px-6 py-4 text-gray-700">{customer.id}</td>
                <td className="px-6 py-4 text-gray-700">{customer.name}</td>
                <td className="px-6 py-4 text-gray-700">{customer.email}</td>
                <td className="px-6 py-4 text-gray-700">{customer.phone}</td>
                <td className="px-6 py-4 text-gray-700">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      customer.status === 'Active' ? 'bg-green-200 text-green-800' :
                      customer.status === 'Inactive' ? 'bg-red-200 text-red-800' :
                      'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-700">
                  <Link
                    to={`/admin/customers/edit/${customer.id}`}
                    className="text-blue-500 hover:text-blue-700 mr-4"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => alert(`Deleting customer ${customer.id}`)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersPage;