import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../Asseat/images/logo.png";
import user1 from "../Asseat/images/user2.png";
import "../Asseat//Css/header.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// redux auth slice
import { logOut } from "../redux/slices/auth.slice";

// session storage
import { removeUserAuth } from "../utils/sessionStorage";

const navigation = [
  { name: "Home", href: "/Home" },
  { name: "Categories", href: "/Category" },
  { name: "Feature", href: "/Feature" },
  { name: "Contact ", href: "/Contact" },
  { name: "About", href: "/About" },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  //redux
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  //redux

  const handleLogout = () => {
    if (window.confirm("Are you want to log out?")) {
      dispatch(logOut());
      removeUserAuth();
      navigate("/");
    }
  };

  return (
    <Disclosure as="nav" className="backdrop-blur-sm  bg-gray-800/70  fixed w11 maar tracking-normal ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6  lg:px-6 m-0 ">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center  ms-0 mm11">
                  <Link to="/">
                    <img
                      className="h-8 w-auto items-center flex"
                      src={logo}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block ml-10">
                  <div className="flex space-x-4 item-center tracking-wide mb-2  font1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={` mt-0.5
                          ${item.href === location.pathname
                            ? "bg-gray-700  text-white pt-2.5"
                            : "text-gray-300  hover:text-amber-500 pt-2.5"
                          }
                          rounded-md px-3 py-2  text-sm font-bold select-none `}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

                {/* Profile dropdown */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                <>
                  <h1 className="text-white font-medium  md:block hidden font1 mt-1.5 tracking-wider">
                    {userData?.displayName}
                  </h1>

                  <Menu as="div" className="relative ml-5 ">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800  text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full "
                          src={userData?.photoURL || user1}
                          alt="user"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2  w-48 max-lg::w-20 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/Profile"
                              className={`
                                ${active ? "bg-gray-100" : ""
                                } block px-4 py-2 text-sm text-dark hover:text-amber-500 hover:font-semibold`}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/Dashboard"
                              className={`${active ? "bg-gray-100" : ""}
                                block px-4 py-2 text-sm text-dark  hover:text-amber-500 hover:font-semibold
                              `}
                            >
                              Dashboard
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              onClick={handleLogout}
                              className={`
                                ${active ? "bg-gray-100" : ""}
                                block px-4 py-2 text-sm text-dark  hover:text-amber-500 hover:font-semibold`}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  {/* <button
                    type="button"
                    className=" ms-3 relative rounded-full  hover:bg-gray-800  hover:text-black   focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <Menu as="div" className="relative inline-block text-left ">
                      <div>
                        <Menu.Button className="ms-0 relative rounded-full  hover:bg-gray-800 p-1 text-white  focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <BellIcon
                            className="h-6 w-6 rounded-full hover:text-amber-500"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y  divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="#"
                                  className={
                                    (active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                      "block px-4 py-2 text-sm")
                                  }
                                >
                                  Edit
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="#"
                                  className={
                                    (active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                      "block px-4 py-2 text-sm")
                                  }
                                >
                                  Duplicate
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="#"
                                  className={
                                    (active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                      "block px-4 py-2 text-sm")
                                  }
                                >
                                  Archive
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="#"
                                  className={
                                    (active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                      "block px-4 py-2 text-sm")
                                  }
                                >
                                  Move
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="#"
                                  className={
                                    (active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                      "block px-4 py-2 text-sm")
                                  }
                                >
                                  Share
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="#"
                                  className={
                                    (active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-white",
                                      "block px-4 py-2 text-sm")
                                  }
                                >
                                  Add to favorites
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="#"
                                  className={
                                    (active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                      "block px-4 py-2 text-sm")
                                  }
                                >
                                  Delete
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </button> */}
                  <div className="relative inline-flex">
                    <button
                      className="ms-3 relative rounded-full  hover:bg-gray-800 p-1 text-white  focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      type="button"
                    >
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    
                  </div>
                </>

                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 text-white  tracking-wide font1 ">
              {navigation.map((item) => (
                <Disclosure >

                  <Link
                    key={item.name}
                    as="a"
                    to={item.href}
                    className={
                      (item.href === location.pathname
                        ? "bg-gray-900 text-white "
                        : "text-white hover:text-amber-500 ",
                        "block rounded-md px-3 py-2 text-base font-medium")
                    }
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </Disclosure>
              ))}


              {/* {navigation.map((item) => (
                <Disclosure.Button>

                      <Link
                        key={item.name}
                        as="a"
                        to={item.href}
                        className={`
                          ${
                            item.href === location.pathname
                              ? "bg-gray-700  text-white"
                              : "text-gray-300  hover:text-amber-500"
                          }
                          block rounded-md px-3 py-2 text-base font-medium`}
                      >
                        {item.name}
                      </Link>
                      </Disclosure.Button>
                    ))} */}
            </div>

          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
