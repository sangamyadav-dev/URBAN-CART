"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            {/* LOGO */}
            <div className="space-y-6 border-t border-gray-200 cursor-pointer px-4 py-6 text-sm font-medium">
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <img
                    alt="URBAN CART"
                    src="https://cdn-icons-png.freepik.com/256/6463/6463872.png?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_hybrid"
                    className="h-8 w-auto"
                  />
                </a>
                <span className="flex px-5 items-center cursor-pointer justify-center font-bold text-blue-500">
                  URBAN CART
                </span>
              </div>
              {/* Links */}
              <ul>
                <li className="py-2 font-semibold">
                  <Link to="/">Home</Link>
                </li>
                <li className="py-2 font-semibold">
                  <Link to="/MEN">Men</Link>
                </li>
                <li className="py-2 font-semibold">
                  <Link to="/WOMEN">Women</Link>
                </li>
                <li className="py-2 font-semibold">
                  <Link to="/KIDS">Kids</Link>
                </li>
                <li className="py-2 font-semibold">
                  <Link to="/BEAUTY">Beauty Product</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <ul className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  <li className="py-2 font-semibold">
                    <Link to="/Signin">Sign in</Link>
                  </li>
                </ul>
              </div>
              <div className="flow-root">
                <ul className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  <li className="py-2 font-semibold">
                    <Link to="/Create account">Create account</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://cdn-icons-png.freepik.com/256/14272/14272467.png?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_hybrid"
                  className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">
                  IND
                </span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="hidden lg:flex lg:ml-4">
                <a href="#">
                  <img
                    alt="URBAN CART"
                    src="https://cdn-icons-png.freepik.com/256/6463/6463872.png?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_hybrid"
                    className="h-8 w-auto"
                  />
                </a>
                <span className="flex px-5 items-center cursor-pointer justify-center font-bold text-blue-500">
                  URBAN CART
                </span>
              </div>
              <div className="flex justify-center items-center gap-16 max-lg:hidden">
                <ul className="flex justify-between gap-10 px-20 text-gray-600 cursor-pointer text-sm font-medium">
                  <li className="py-2 font-semibold">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="py-2 font-semibold">
                    <Link to="/MEN">Men</Link>
                  </li>
                  <li className="py-2 font-semibold">
                    <Link to="/WOMEN">Women</Link>
                  </li>
                  <li className="py-2 font-semibold">
                    <Link to="/KIDS">Kids</Link>
                  </li>
                  <li className="py-2 font-semibold">
                    <Link to="/BEAUTY">Beauty Product</Link>
                  </li>
                </ul>
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <ul className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    <li className="py-2 font-semibold text-blue-600">
                      <Link to="/Signin">Sign in</Link>
                    </li>
                  </ul>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <ul className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    <li className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      <Link to="/Create account">Create account</Link>
                    </li>
                  </ul>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      alt=""
                      src="https://cdn-icons-png.freepik.com/256/14272/14272467.png?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_hybrid"
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">IND</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
                {/* Search */}
                <div className="hidden lg:flex lg:ml-6 text-sm">
                  <input
                    placeholder="Search Products"
                    className="flex-1 px-4 py-2 text-gray-800 placeholder-gray-600 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="search"
                    type="search"
                  />
                </div>

                {/* USER PROFILE */}
                <div className="flex lg:ml-6 mr-2 text-sm">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm font-semibold text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            Profile
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="/Order"
                            className="block px-4 py-2 text-sm font-semibold text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            Your Cart
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 font-semibold text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            Account settings
                          </a>
                        </MenuItem>
                        <form action="#" method="POST">
                          <MenuItem>
                            <button
                              type="submit"
                              className="block w-full px-4 py-2 font-semibold text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                              Sign out
                            </button>
                          </MenuItem>
                        </form>
                      </div>
                    </MenuItems>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
