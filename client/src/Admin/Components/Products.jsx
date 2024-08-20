// import React from 'react';
import { Link } from 'react-router-dom';

// Sample product data
const products = [
  { id: '001', name: 'Laptop', category: 'Electronics', price: 1200, stock: 30 },
  { id: '002', name: 'Smartphone', category: 'Electronics', price: 800, stock: 50 },
  { id: '003', name: 'Headphones', category: 'Accessories', price: 150, stock: 100 },
  // Add more products as needed
];

const ProductsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="mb-4">
        <Link
          to="/Admin/AddProducts"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add New Product
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-gray-600">ID</th>
              <th className="px-6 py-3 text-left text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-gray-600">Category</th>
              <th className="px-6 py-3 text-left text-gray-600">Price</th>
              <th className="px-6 py-3 text-left text-gray-600">Stock</th>
              <th className="px-6 py-3 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="px-6 py-4 text-gray-700">{product.id}</td>
                <td className="px-6 py-4 text-gray-700">{product.name}</td>
                <td className="px-6 py-4 text-gray-700">{product.category}</td>
                <td className="px-6 py-4 text-gray-700">${product.price}</td>
                <td className="px-6 py-4 text-gray-700">{product.stock}</td>
                <td className="px-6 py-4 text-gray-700">
                  <Link
                    to={`/Admin/Products/edit/${product.id}`}
                    className="text-blue-500 hover:text-blue-700 mr-4"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => alert(`Deleting product ${product.id}`)}
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

export default ProductsPage;