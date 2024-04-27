import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Feature from "./pages/Feature";
import Category from "./pages/Category";
import About from "./pages/About";
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
import { loadingStart, loadingStop } from "./redux/slices/auth.slice";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const [bannerLoading, setBannerLoading] = useState(false);
  const { userData, token, Authenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
      {getBannerOnce() && bannerLoading && <Banner />}
      {(isLoading || loading) && <Loader />}

      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/Singup" element={<Singup />} />

        {/*----------------- Proflie -----------------*/}
        {(sessionStorage.getItem("user") || userData) && (
          <>
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/Feature" element={<Feature />} />
            <Route path="/About" element={<About />} />
            <Route path="/Proflie" element={<Proflie />} />
          </>
        )}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
