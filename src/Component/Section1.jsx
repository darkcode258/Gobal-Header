import React, { useEffect } from "react";
import "../Asseat/Css/style1.css";
import { get } from "../api";
import {
  fetchProductStart,
  fetchProductSuccess,
  fetchProductError,
} from "../redux/slices/product.slice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// import { ProgressBar, ThreeDots } from 'react-loader-spinner'

function Section1() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductStart());
    get()
      .then((data) => {
        dispatch(fetchProductSuccess(data));
        console.log(data);
      })
      .catch((err) => {
        dispatch(fetchProductError(err));
      });
  }, [dispatch]);

  return (
    <div>
      <section class="text-gray-600 body-font  bg-white">
        <div class="container px-5 py-24 p40 mx-auto">
          <div class="flex flex-wrap -m-4">
            {data?.map((product, index) => {
              return (
                <div key={index} class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link
                    to={""}
                    class="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      class="object-contain object-center w-full h-full block hover:scale-100 scale-95 transition-transform duration-300 ease-in-out"
                      src={product?.image || "https://dummyimage.com/420x260"}
                    />
                  </Link>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product?.category || "CATEGORY"}
                    </h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                      {product?.title || "Title"}
                    </h2>
                    <p class="mt-1">Price - {product?.price || "$00.00"}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section1;
