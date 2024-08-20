import { useContext } from "react";
import { CartContext } from "../../Contexts/Cartcontext";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { cartItems, getCartTotal, clearCart, removeFromCart, addToCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    alert("Order placed!");
    clearCart();
  };

  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <div className="p-4 md:p-8 lg:p-12 xl:p-20 max-w-screen-lg mx-auto mt-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-gray-900 mb-6">
        Your Cart
      </h1>
      <div className="space-y-6">
        {cartItems.length > 0 ? (
          <>
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div
                  className="flex flex-col md:flex-row justify-between items-center py-4"
                  key={item.id}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg shadow-sm"
                    />
                    <div className="flex flex-col">
                      <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 font-semibold">
                        ${item.price.toFixed(2)}
                      </p>
                      <p className="flex p-2 text-sm text-white rounded w-24 md:w-24 bg-gray-800 font-semibold">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4 md:mt-0">
                    <button
                      className="px-4 py-2  bg-gray-800 text-white text-sm md:text-sm font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        addToCart(item);
                      }}
                    >
                      Add
                    </button>
                    <button
                      className="flex px-4 py-1 items-center bg-gray-800 text-white text-sm md:text-sm  md:items-center font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        removeFromCart(item);
                      }}
                    >
                      <svg
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4 md:h-5 md:w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          strokeWidth="2"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center py-4 border-t border-gray-200 mt-4">
              <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                Total:
              </h2>
              <p className="text-lg md:text-xl font-bold text-gray-900">
                ${getCartTotal().toFixed(2)}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="button"
                className="mt-4 items-center md:mt-6 px-6 py-3 bg-blue-600 text-white text-lg md:text-2xl uppercase font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mt-2">
              Add some items to your cart to proceed with the order.
            </p>
            <button
              type="button"
              className="mt-6 px-4 py-2 bg-transparent text-lg md:text-2xl uppercase tracking-widest hover:bg-purple-500 hover:text-white font-semibold border border-purple-500 hover:border-transparent rounded"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
