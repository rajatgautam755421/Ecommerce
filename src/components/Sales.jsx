import React, { useState, useEffect } from 'react';
import { SalesCard } from './SalesCard'
import './Sales.css';
import axios from 'axios'
import Typewriter from 'typewriter-effect';

const Sales = () => {


    const [value, setValue] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/ios");

            setValue(data);
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        fetchData();
    });
    return (
        <>
            <div className="Sales container" id="gallery">
                <div className="row">
                    <div className="typewritter" style={{ fontSize: "40px" }}>
                        <Typewriter



                            options={{
                                strings: ['Items On Sale'],
                                autoStart: true,
                                loop: true,

                            }}
                        />
                    </div>

                    {
                        value ?
                            value.map((newValue) => {
                                return (
                                    <>
                                        <div className="col-md-4 sm-10">
                                            <SalesCard id={newValue._id} Name={newValue.NameOfItem} selected Description={newValue.description} Price={newValue.previousPrice} EP={newValue.presentPrice} Image={newValue.image} />

                                        </div>
                                    </>
                                )
                            })
                            : <div className="loader"></div>
                    }
                </div>

            </div>

        </>
    )
}

export default Sales
