import React, { useEffect, useState } from "react";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import img from "/public/logo.png";
import {
  FaHome,
  FaChalkboardTeacher,
  FaBookOpen,
  FaChartLine,
  FaSignInAlt,
} from "react-icons/fa";
import classNames from "classnames";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 100;

      setIsSticky(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        style={{
          backgroundColor: isSticky ? "white" : "transparent",
          position: "fixed",
          left: 0,
          right: 0,
          top: 0, // Ensure it starts at the top
          padding: "1rem", // Adjust padding as needed
          transition: "background-color 0.3s ease-in-out", // Apply transition only to background-color
          zIndex: 50, // Adjust the z-index as needed
          boxShadow: isSticky
            ? "0px 20px 50px rgba(59, 90, 136, 0.05)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-3">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <a>
                    <img className="h-20 w-auto" src={img} alt="Logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex  items-baseline space-x-8">
                <Link href="/" passHref>
                  <a className="text-[#343D48] font-sans hover:text-[#F9A826] rounded-md text-base ">
                    Home
                  </a>
                </Link>
                <Link href="/services" passHref>
                  <a className="text-[#303030] font-sans hover:text-[#F9A826] rounded-md text-base ">
                    Services
                  </a>
                </Link>
                <Link href="/ourWorks" passHref>
                  <a className="text-[#303030] font-sans hover:text-[#F9A826] rounded-md text-base ">
                    Our Works
                  </a>
                </Link>
                <Link href="/about-us" passHref>
                  <a className="text-[#303030] font-sans hover:text-[#F9A826] rounded-md text-base ">
                    About Us
                  </a>
                </Link>
                <Link href="/blog" passHref>
                  <a className="text-[#303030] font-sans hover:text-[#F9A826] rounded-md text-base ">
                    Blog
                  </a>
                </Link>
                <Link href="/career" passHref>
                  <a className="text-[#303030] font-sans hover:text-[#F9A826] rounded-md text-base ">
                    Career
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Link href="/login" passHref>
                <a className="text-white bg-[#F9A826] hover:bg-white hover:text-black border-2 px-5 py-2 rounded-md text-xl font-semibold">
                  Hire Us
                </a>
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={handleToggle}
                className="bg-[#59C6BC] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Drawer
          open={isOpen}
          onClose={handleToggle}
          direction="left"
          className="z-50"
          style={{
            position: "fixed",
            height: "100%",
            width: "250px",
            background: "#59C6BC",
          }}
        >
          <div className="px-4 py-4 text-white">
            <Link href="/" passHref>
              <a>
                <img
                  className="h-auto w-auto bg-[#59C6BC] px-auto"
                  src={img}
                  alt="Logo"
                />
              </a>
            </Link>
            <Link href="/" passHref>
              <a
                className="block px-4 py-2 mt-3 text-sm"
                onClick={handleToggle}
              >
                <FaHome className="inline-block h-6 w-5 mr-2" /> Home
              </a>
            </Link>
            <Link href="/instructors" passHref>
              <a className="block px-4 py-2 text-sm" onClick={handleToggle}>
                <FaChalkboardTeacher className="inline-block h-6 w-5 mr-2" />{" "}
                Instructors
              </a>
            </Link>
            <Link href="/classes" passHref>
              <a className="block px-4 py-2 text-sm" onClick={handleToggle}>
                <FaBookOpen className="inline-block h-6 w-5 mr-2" /> Classes
              </a>
            </Link>
            <Link href="/dashboard" passHref>
              <a className="block px-4 py-2 text-sm" onClick={handleToggle}>
                <FaChartLine className="inline-block h-6 w-5 mr-2" /> Dashboard
              </a>
            </Link>
            <Link href="/login" passHref>
              <a className="block px-4 py-2 text-sm" onClick={handleToggle}>
                <FaSignInAlt className="inline-block h-6 w-5 mr-2" /> Login
              </a>
            </Link>
          </div>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;
