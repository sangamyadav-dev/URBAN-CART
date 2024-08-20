import { useState } from 'react';

const AddCustomerPage = () => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'Active',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle adding customer
    alert('Customer added');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Customer</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          placeholder="Customer Name"
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          placeholder="Customer Email"
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          placeholder="Customer Phone"
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <select
          name="status"
          value={customer.status}
          onChange={handleChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default AddCustomerPage;
