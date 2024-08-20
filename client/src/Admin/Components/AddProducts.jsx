import { useState } from 'react';

const AddProductPage = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle product addition
    alert('Product added');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          placeholder="Stock"
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;