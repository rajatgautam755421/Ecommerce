import React from 'react';
import './Sidenav.css';
import SDcomponent from './SDcomponent'
import LaptopIcon from '@material-ui/icons/Laptop';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TvIcon from '@material-ui/icons/Tv';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import WcIcon from '@material-ui/icons/Wc';
const SideNav = () => {
    return (
        <>
            <div className="container-fluid ">
                <div className="row">

                    <div className=" sidebar col-sm-2 d-none d-sm-block order-lg-12 order-md-2">
                        <h3 className="sidebar__h3">Popular</h3>
                        <SDcomponent
                            text="Laptops"
                            Icon={LaptopIcon} />
                        <hr />
                        <SDcomponent text="Phones"
                            Icon={PhoneAndroidIcon} />
                        <hr />
                        <SDcomponent text="TVs"
                            Icon={TvIcon} />
                        <hr />
                        <SDcomponent text="Kids"
                            Icon={EmojiPeopleIcon} />
                        <hr />


                        <SDcomponent text="Sports"
                            Icon={SportsCricketIcon} />
                        <hr />

                        <SDcomponent text="Clothing"
                            Icon={WcIcon} />
                        <hr />
                        <SDcomponent text="Fooding"
                            Icon={FastfoodIcon} /><hr />

                    </div>
                    <div className="col-sm-10 order-lg-2 order-md-12">

                        <div id="carouselExampleIndicators" className="carousel slide container-fluid" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://icms-image.slatic.net/images/ims-web/54185b9f-122a-4cc4-a6e6-f7fe44cdf15a.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://icms-image.slatic.net/images/ims-web/677083cf-c0ab-4ead-b9fa-2a8e2eafa8f1.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://icms-image.slatic.net/images/ims-web/b1bd8859-5e6a-4533-90ee-c21e7091d8e1.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SideNav
