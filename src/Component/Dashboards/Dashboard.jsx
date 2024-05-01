import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { greeting } from "../../utils/greeting";
// import { Button } from "bootstrap";
import { MdClose } from "react-icons/md";
import '../../Asseat/Css/deshborad.css'

const menuList = [
  {
    title: "Dashboard",
    to: "/Dashboard",
    icon: (
      <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
          class="dark:fill-slate-600 fill-current text-cyan-400"
        ></path>
        <path
          d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
          class="fill-current text-cyan-200 group-hover:text-cyan-300"
        ></path>
        <path
          d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
          class="fill-current group-hover:text-sky-300"
        ></path>
      </svg>
    ),
  },
  {
    title: "Products",
    to: "/Dashboard/Products",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          class="fill-current text-cyan-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
          d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
        />
        <path
          class="fill-current text-gray-300 group-hover:text-cyan-300"
          d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
        />
      </svg>
    ),
  },
  {
    title: "Categories",
    to: "/Dashboard/Categories",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          class="fill-current text-gray-300 group-hover:text-cyan-300"
          fill-rule="evenodd"
          d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
          clip-rule="evenodd"
        />
        <path
          class="fill-current text-cyan-400 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
          d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
        />
      </svg>
    ),
  },
];

const Dashboard = () => {
  const location = useLocation();
  const { userData } = useSelector((state) => state.auth);

  return (
    <section class="fixed top-0 left-0 h-screen w-screen z-50 bg-gray-900">
      
      <aside class="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700">
        <div>
          <div class="mt-8 text-center ">
            <img
              src={userData?.photoURL}
              alt=""
              class="m-auto h-10 w-10 rounded-full object-cover lg:h-20  lg:w-20"
            />
            <h5 class="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">
              {userData?.displayName}
            </h5>
            <span class="hidden text-gray-300 lg:block">Admin</span>
          </div>
                <hr style={{height:'2px',borderWidth:'0',color:'Black',backgroundColor:'white', margin:'auto', width:"100%",marginTop:'20px'}} ></hr>

          <ul class="mt-8 space-y-2 tracking-wide">
            {menuList?.map((menu, index) => {
              return (
                <li>
                  <Link
                    to={menu.to}
                    aria-label="dashboard"
                    class={`${location.pathname == menu.to
                      ? "from-sky-600 to-cyan-400"
                      : ""
                      } relative flex items-center space-x-4 rounded-xl bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 px-4 py-3 text-white`}
                  >
                    {menu.icon}
                    {/* <span class="-mr-1 font-medium">{menu.title}</span> */}
                    <span class="-mr-1 font-medium">{menu.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
{/* 
        <div class="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
          <Link
            to="/"
            class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="h-6 w-6"
              fill="currentColor"
              class="bi bi-box-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
              />
              <path
                fill-rule="evenodd"
                d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
              />
            </svg>
            <span class="group-hover:text-gray-700 dark:group-hover:text-white">
              Back To Home
            </span>
          </Link>
        </div> */}
      </aside>
      <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div class="sticky top-0 h-16 border-b bg-gray-900 dark:border-gray-700 lg:py-2.5">
          <div class="flex items-center justify-between space-x-4 px-6 2xl:container">
            <h5
              hidden
              class="font1 text-2xl font-medium  lg:block bg-clip-text text-transparent bg-gradient-to-r  from-amber-500 to-white  dark:text-white"
            >
              {`${greeting}  Admin`}
            </h5>
            <button class="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="my-auto h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          <div className="text-red-600 ">
            <Link to="/">
            <MdClose className="size-8"/>
            </Link>
          </div>
          </div>
        </div>
        <div class="px-6 pt-6 2xl:container">
          {/* <div class="flex h-[80vh] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
            <Outlet />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;