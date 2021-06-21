import React, { useState, useEffect } from 'react';
import './Footer.css'
import Button from './Button'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const Footer = () => {
    const [email, setEmail] = useState('')
    const [show, setShow] = useState(false)
    const [like, setLike] = useState(0)
    const [value, setValue] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/like");

            setValue(data);
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        fetchData();
    });

    const handleSubmit = async (e) => {

        try {
            e.preventDefault();
            setShow(true);
            const { newsletter } = await axios({
                method: "POST",
                url: 'http://localhost:5000/newsletter',
                data: {
                    email,
                },
            })
            console.log(newsletter)
            setEmail('')


        } catch (error) {
            console.log(error)
        }
    }
    const handleClick = async (e) => {

        setLike(like + 1)
        try {
            e.preventDefault();


            const { POSTDATA } = await axios({
                method: "POST",
                url: 'http://localhost:5000/like',
                data: {
                    like
                },
            })
            console.log(POSTDATA)


        } catch (error) {
            console.log(error)
        }

    }
    const handleDoubleClick = (e) => {
        e.preventDefault()
        setLike(like - 1)
    }

    return (
        <>
            <footer className="Footer text-gray-600 body-font">
                <div className="Footer__COntainer container-fluid px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">First Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Second Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Third Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">First Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Second Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Third Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">First Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Second Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Third Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">First Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Second Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Third Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">First Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Second Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Third Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">First Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Second Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Third Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="Footer__Placeholder border-t border-gray-200">
                    <div className="Footer__Placeholder1 container px-5 py-8 flex flex-wrap mx-auto items-center">
                        {
                            !show ? (

                                <form onSubmit={handleSubmit}>
                                    <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">

                                        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2s mb-3 w-100">
                                            <h5 style={{ color: "white", fontSize: "15px", textAlign: "left" }}> Sign In to out NewsLetter to get updated..</h5>


                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out uk-card uk-card-hover" required placeholder="Your Email" />

                                        </div>

                                        <Button text="Submit" className="newsletter__button" />
                                    </div>
                                </form>

                            )
                                : <div><h3 style={{ color: "white" }}>Thankyou...</h3></div>
                        }

                        <ThumbUpIcon className="like" style={{ color: "white", cursor: "pointer", justifyContent: "center", alignItems: "center", marginLeft: "50px", marginRight: "auto" }} onClick={handleClick} onDoubleClick={handleDoubleClick} />
                        <h3 style={{ color: "white" }}>{value.length}</h3>

                        <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                            <Link className="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </Link>
                            <Link className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </Link>
                            <Link className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </Link>
                            <Link className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Daraj-
                            <Link to="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">Rajat , Aman , Samrat</Link>
                        </p>
                        <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Created by Rajat , Aman , Samrat</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
