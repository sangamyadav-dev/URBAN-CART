import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for toggling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-6 left-4 z-50 text-black"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-18 left-0 bg-blue-600 text-white flex flex-col h-full transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:flex lg:flex-col`}
      >
        <div className="p-4 px-10 text-lg font-bold bg-blue-900 cursor-pointer">
          UrbanCart Admin
        </div>
        <nav className="flex-1">
          <ul>
            <li>
              <Link
                to="/Admin"
                className="block p-4 font-semibold hover:bg-blue-700 cursor-pointer"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="Admin/orders"
                className="block p-4 font-semibold hover:bg-blue-700 cursor-pointer"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                to="Admin/products"
                className="block p-4 font-semibold hover:bg-blue-700 cursor-pointer"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="Admin/customers"
                className="block font-semibold p-4 hover:bg-blue-700 cursor-pointer"
              >
                Customers
              </Link>
            </li>
            <li>
                <Link
                  to="Admin/Payments"
                  className="block font-semibold p-4 hover:bg-blue-700 cursor-pointer"
                >
                  Payments
                </Link>
              </li>
              <li>
                <Link
                  to="Admin/Tracking"
                  className="block font-semibold p-4 hover:bg-blue-700 cursor-pointer"
                >
                  Tracking
                </Link>
              </li>
              <li>
                <Link
                  to="Admin/Shipment"
                  className="block font-semibold p-4 hover:bg-blue-700 cursor-pointer"
                >
                  Shipment
                </Link>
              </li>
              <li>
                <Link
                  to="Admin/Settings"
                  className="block font-semibold p-4 mt-44 hover:bg-blue-700 cursor-pointer"
                >
                  Settings
                </Link>
              </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;