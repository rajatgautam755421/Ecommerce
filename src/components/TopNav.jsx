import React, { useState } from "react";
import "./TopNav.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import TOpNavItem from "./TOpNavItem";
import HomeIcon from "@material-ui/icons/Home";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import InfoIcon from "@material-ui/icons/Info";
import { useAuth0 } from "@auth0/auth0-react";

const TopNav = () => {
  const { loginWithPopup, user, logout, isAuthenticated, isLoading, error } =
    useAuth0();

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="mainNavBar">
        <div className="container-fluid">
          <div className="row">
            <div
              className="Search__image col-sm-3 "
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link to="/">
                <img
                  src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1eIwbmljTBKNjSZFuXXb0HFXa.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-sm-9 container-fluid">
              <div className="row">
                <div className="col-7 ">
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="search__input"
                      type=" search"
                      placeholder="    Search"
                      aria-label="Search"
                    />
                    <SearchOutlinedIcon className="SearchIcon" />
                  </form>
                </div>
                <div
                  className="col-5  container-fluid mt-2"
                  style={{ marginRight: "auto" }}
                >
                  {!show ? (
                    <MenuIcon
                      onClick={handleClick}
                      className="real__navbar"
                      style={{ width: "50px", height: "60px" }}
                    />
                  ) : (
                    <div className="sidebar__new container-fluid">
                      <CloseIcon
                        onClick={() => setShow(false)}
                        className="cross"
                        style={{ width: "50px", height: "50px" }}
                      />

                      <div className="items">
                        {isAuthenticated ? (
                          <p style={{ textAlign: "center" }}>
                            <h6>Hi , {user.nickname}</h6>
                          </p>
                        ) : (
                          <div />
                        )}

                        <Link
                          to="/"
                          style={{ textDecoration: "none" }}
                          className="text__new"
                        >
                          <TOpNavItem
                            Icon={HomeIcon}
                            text="Home"
                            className="sidenav__text"
                          />
                        </Link>

                        <TOpNavItem
                          Icon={ContactSupportIcon}
                          text="Contact Us"
                          className="text__new"
                        />

                        <TOpNavItem
                          Icon={InfoIcon}
                          text="About Us"
                          className="text__new"
                        />

                        {!isAuthenticated ? (
                          <button
                            type="button"
                            class="btn btn-outline-success"
                            onClick={loginWithPopup}
                            style={{ width: "100%" }}
                          >
                            Login/Signup
                          </button>
                        ) : (
                          <button
                            onClick={logout}
                            type="button"
                            class="btn btn-outline-danger"
                            style={{ width: "100%" }}
                          >
                            Logout
                          </button>
                        )}

                        <hr style={{ width: "100%" }} />

                        <TOpNavItem
                          Icon="none"
                          text="Clothing"
                          className="text__new"
                        />

                        <TOpNavItem
                          Icon="none"
                          text="Lifestyle"
                          className="text__new"
                        />
                        <TOpNavItem
                          Icon="none"
                          text="Women"
                          className="text__new"
                        />

                        <TOpNavItem
                          Icon="none"
                          text="Fooding"
                          className="text__new"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
