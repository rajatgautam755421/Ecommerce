import React, { useState, useEffect, useRef } from "react";
import "./Details.css";
import { useParams, useRouteMatch, Link } from "react-router-dom";
import Button from "./Button";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

// import AddToCart from './Addtocard';
import ContentEditable from "react-contenteditable";
import Payment from "./Payment";
import Alert from "react-bootstrap/Alert";

const Details = () => {
  const { user } = useAuth0();
  const text = useRef("");
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [distict, setDistict] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [noOfItems, setNoOfItems] = useState(1);
  const [value, setValue] = useState([]);
  const [info, setInfo] = useState([]);
  const [svg, setSvg] = useState(false);
  let { id } = useParams();
  let { path, url } = useRouteMatch();
  console.log(id);
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
  });

  const handleSvg = (e) => {
    e.preventDefault();
    setSvg(true);
  };
  const handleChange = (evt) => {
    text.current = evt.target.value;
  };
  const handleBlur = () => {
    console.log(text.current);
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setShow(true);

      const { POSTDATA } = await axios({
        method: "POST",
        url: "http://localhost:5000/submitform",
        data: {
          firstName,
          lastName,
          email,
          phoneNumber,
          distict,
          municipality,
          address1,
          address2,
          noOfItems,
        },
      });
      console.log(POSTDATA);

      setLastName("");
      setDistict("");
      setAddress1("");
      setEmail("");
      setAddress2("");
      setMunicipality("");
      setPhoneNumber();
    } catch (error) {
      console.log(error);
    }
  };
  const fetchData1 = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/submitform");

      setInfo(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData1();
  });

  {
    if (show) {
      return (
        <>
          <ContentEditable
            html={text.current}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div
            className="container-fluid mt-10 "
            style={{ height: "300px", width: "60%" }}
          >
            <Alert variant="primary" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>
                <div
                  className="container-fluid mt-10"
                  style={{ height: "350px" }}
                >
                  <div className="row">
                    <h3 style={{ textAlign: "center" }}>{firstName}'s Cart</h3>

                    <div className="col-md-4 sm-10 my-4">
                      <img src={value.data.image} alt="" />
                    </div>
                    <div className="col-md-8 sm-10 my-4">
                      <div className="cart__items">
                        <h2 style={{ fontSize: "25px" }}>
                          {value.data.NameOfItem}
                        </h2>
                      </div>
                      <div className="cart__items">
                        <h2 style={{ fontSize: "15px" }}>
                          Total Items Bought = {noOfItems}
                        </h2>
                      </div>

                      <div className="cart__price">
                        <h2 style={{ fontSize: "15px" }}>
                          Total Price = Rs.{value.data.presentPrice * noOfItems}
                        </h2>
                      </div>
                    </div>

                    <Payment />
                  </div>
                </div>
              </Alert.Heading>
            </Alert>
          </div>
        </>
      );
    }
  }

  return (
    <>
      {
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div
            className="container px-5 py-24 mx-auto flex "
            style={{ width: "100%" }}
          >
            <div
              className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
              style={{ width: "100%" }}
            >
              <h2 className="text-center mb-4" style={{ fontSize: "20px" }}>
                Please fill the form {user.name}
              </h2>
              <div className="relative mb-4">
                <label
                  for="firstName"
                  className="leading-7 text-sm text-gray-600"
                />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out uk-card uk-card-hover"
                  required
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{ border: "none" }}
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="lastName"
                  className="leading-7 text-sm text-gray-600"
                />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out uk-card uk-card-hover"
                  required
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="email"
                  className="leading-7 text-sm text-gray-600"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out uk-card uk-card-hover"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="phoneNumber"
                  className="leading-7 text-sm text-gray-600"
                />
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out uk-card uk-card-hover"
                  required
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="distict"
                  className="leading-7 text-sm text-gray-600"
                />
                <input
                  type="text"
                  id="distict"
                  name="distict"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out uk-card uk-card-hover"
                  required
                  placeholder="District"
                  value={distict}
                  onChange={(e) => setDistict(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="municipality"
                  className="leading-7 text-sm text-gray-600"
                />
                <input
                  type="text"
                  id="municipality"
                  name="municipality"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out uk-card uk-card-hover"
                  required
                  placeholder="Municipality"
                  value={municipality}
                  onChange={(e) => setMunicipality(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="address1"
                  className="leading-7 text-sm text-gray-600"
                />
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out uk-card uk-card-hover"
                  required
                  placeholder="Address 1"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="address2"
                  className="leading-7 text-sm text-gray-600"
                />
                <input
                  type="text"
                  id="address2"
                  name="address2"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out uk-card uk-card-hover"
                  required
                  placeholder="Address 2"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                />
              </div>
              <div className="relative mb-3">
                <label
                  for="noOfItems"
                  className="leading-7 text-sm text-gray-600"
                />
                <input
                  id="input__field"
                  type="number"
                  id="noOfItems"
                  name="noOfItems"
                  min="1"
                  max="5"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out uk-card uk-card-hover"
                  required
                  placeholder="No Of Items"
                  value={noOfItems}
                  onChange={(e) => setNoOfItems(e.target.value)}
                />
              </div>

              <Button className="mt-10" text="Submit" />
              {/* <Link to={`/cart/${id}/${phoneNumber}`}></Link> */}
            </div>
          </div>
        </form>
      }

      {/* Bootstrap model */}
    </>
  );
};

export default withAuthenticationRequired(Details, {
   
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
