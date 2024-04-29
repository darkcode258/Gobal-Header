import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Feature from "./pages/Feature";
import Category from "./pages/Category";
import About from "./pages/About";
import Dashboard from "./Component/Dashboards/Dashboard";
import DashboardHome from "./Component/Dashboards/Home";
import Categories from "./Component/Dashboards/Categories";
import Products from "./Component/Dashboards/Products";
import Proflie from "./Component/Proflie/Proflie";
import Page404 from "./Component/Page404";
import Loader from "./Component/Loader";
import Login from "./Component/Login/Login";
import Singup from "./Component/Login/Singup";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import Banner from "./Component/Banner";
import {
  setBannerOnce,
  getBannerOnce,
  removeBannerOnce,
} from "./utils/sessionStorage";
import { getUserAuth } from "./utils/sessionStorage";
import { sessionDataSet } from "./redux/slices/auth.slice";
import Header from "./Component/Header";
import Footer from "./Component/footer";
import Theam from "./Component/Theam";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const [bannerLoading, setBannerLoading] = useState(false);
  const { userData, token, Authenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (getUserAuth() && userData === null) {
      dispatch(sessionDataSet(getUserAuth()));
    }
  }, [dispatch, userData, token, Authenticated, loading, error]);

  useEffect(() => {
    if (Authenticated && userData === null) {
      toast.success("Login Successful!");
    }
    if (error) {
      toast.error("Login Failed!");
    }
  }, [Authenticated, error, userData]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    if (location.pathname === "/") {
      document.title = "Replay Global";
    } else {
      document.title = `Replay Global - ${
        location.pathname.split("/").reverse()[0]
      }`;
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!getBannerOnce()) {
      setBannerLoading(true);
      setBannerOnce(true);
      setTimeout(() => {
        setBannerLoading(false);
      }, 6000);
    }
  }, []);

  return (
    <>
      {getUserAuth() && !!userData && <Header />}
      <ToastContainer />

      {getBannerOnce() && bannerLoading && <Banner />}
      {(isLoading || loading) && <Loader />}

      <Routes>
        {/*----------------- Authentication -----------------*/}
        {getUserAuth() && !!userData ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/Feature" element={<Feature />} />
            <Route path="/About" element={<About />} />
            <Route path="/Profile" element={<Proflie />} />
            <Route path="/Dashboard" element={<Dashboard />}>
              <Route path="/Dashboard" element={<DashboardHome />} />
              <Route path="/Dashboard/Products" element={<Products />} />
              <Route path="/Dashboard/Categories" element={<Categories />} />
            </Route>
          </>
        ) : (
          <>
            <Route path="*" element={<Login />} />
            <Route path="/Singup" element={<Singup />} />
          </>
        )}
        <Route path="*" element={<Page404 />} />
      </Routes>
      {getUserAuth() && !!userData && <Footer />}
      {getUserAuth() && !!userData && <Theam />}
    </>
  );
}

export default App;
