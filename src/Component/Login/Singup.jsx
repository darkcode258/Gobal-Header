import "../../Asseat/Css/login.css";
import Theam from "../Theam";
import logo from "../../Asseat/images/Global (1).png";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGooglePopup } from "../../firebase/firebase.utils";
import { useSelector, useDispatch } from "react-redux";
import { FcGoogle } from "react-icons/fc";

import {
  loginStart,
  loginSuccess,
  loginError,
} from "../../redux/slices/auth.slice";

import { setUserAuth } from "../../utils/sessionStorage";
export default function Singup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.auth);

  const logGoogleUser = async () => {
    dispatch(loginStart());
    try {
      const response = await signInWithGooglePopup();
      const user = response.user; // Get the user object from the response
      console.log("User:", user.providerData[0]);
      dispatch(loginSuccess(user.providerData[0]));
      setUserAuth(user.providerData[0]);
      navigate("/Home");
      // Now you can access user data such as user.displayName, user.email, user.photoURL, etc.
    } catch (error) {
      console.error("Error signing in with Google:", error);
      dispatch(loginError(error));
    }
  };
  return (
    <section className="sizer">
      {/* <Theamdark /> */}
      <Theam />

      <div className="flex min-h-full flex-1 flex-col justify-center px-0 lg:px-0 items-center ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10  sm:w-full sm:max-w-sm text-black">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-black"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  placeholder="sharman_hosh"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="font-sans block w-full rounded-md border-0 py-1.5 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-black"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  placeholder="reaplayglobal@gmail.com"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="font-sans block w-full rounded-md border-0 py-1.5 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-black"
                >
                  Password
                </label>
                <div className="text-sm">
                  {/* <Link
                    to="#"
                    className="font-semibold text-gray-500 hover:text-amber-500"
                  >
                    Forgot password?
                  </Link> */}
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="font-sans block w-full rounded-md border-0 py-1.5 px-3  text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="d-flex justify-center items-center">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md tracking-wide bg-amber-500 px-3 py-1.5 px-3text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>
          <br />
          <button

            onClick={logGoogleUser}
            type="button"
            className="font-sans flex w-full justify-center tracking-wide rounded-md bg-transparent px-3 py-1.5 px-3text-sm font-semibold leading-6 text-black hover:text-white duration-500 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  border-2 border-amber-500 "
          > <FcGoogle className="flex justify-start items-center p-0   mt-0.5 drop-shadow-sm size-5" />
          <div className="flex justify-center items-center m-auto ">
          Continue with Google
          </div>
          </button>
          <p className="mt-10 text-center text-sm text-gray-500">
            I Have already !{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-amber-600 hover:text-amber-500"
            >
              Singup Account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
