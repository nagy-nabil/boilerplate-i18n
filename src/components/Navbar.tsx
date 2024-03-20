import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-neutral-900 fixed w-full z-20 top-0 start-0 border-b border-neutral-200 dark:border-neutral-600">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={Logo}
            alt="Miraflores.city"
            width={42}
            height={42}
            className="w-8 h-8"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Miraflores.city
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 transition-all"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-neutral-100 rounded-lg bg-neutral-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-neutral-800 md:dark:bg-neutral-900 dark:border-neutral-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-700 md:p-0 md:dark:text-yellow-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-neutral-900 rounded hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-neutral-900 rounded hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-neutral-900 rounded hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
