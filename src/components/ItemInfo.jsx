import React, { useState, useEffect } from "react";
import "./ItemInfo.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "./Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RecommendedItems from "./RecomendedItems";
import Loader from "react-loader-spinner";
import { useAuth0 } from "@auth0/auth0-react";

const ItemInfo = () => {
  const { isAuthenticated, loginWithPopup } = useAuth0();
  let { id } = useParams();

  const [value, setValue] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/ios/${id}`);

      setValue(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [value]);

  return (
    <>
      {value.data ? (
        <section className="text-gray-600 mt-4 body-font overflow-hidden">
          <div className="container  mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={value.data.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {value.data.NameOfItem}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </span>
                </div>
                <p className="leading-relaxed">{value.data.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                <div className="card__flex flex">
                  {isAuthenticated ? (
                    <Link to={`/info/${value.data._id}`}>
                      <button type="button" class="btn btn-outline-danger">
                        Check Out
                      </button>
                    </Link>
                  ) : (
                    <button
                      onClick={loginWithPopup}
                      type="button"
                      class="btn btn-outline-danger"
                      style={{ width: "40%" }}
                    >
                      Check Out
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // <div className="loader"></div>
        <Loader
          type="Bars"
          color="#2e2e54"
          height={300}
          width={300}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        />
      )}
      <RecommendedItems />
    </>
  );
};

export default ItemInfo;
