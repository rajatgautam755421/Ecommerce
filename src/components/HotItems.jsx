import React from 'react';
import { SalesCard } from './SalesCard'
import './Sales.css';
import Typewriter from 'typewriter-effect';


const Sales = () => {

    return (
        <>
            <div className="Sales container">
                <div className="row">
                    <div className="typewriter" style={{ fontSize: "40px" }}>
                        <Typewriter
                        


                            options={{
                                strings: ['Hottest Items'],
                                autoStart: true,
                                loop: true,

                            }}
                        />
                    </div>
                    <div className="col-md-4 sm-10">
                        <SalesCard Name="Dell Latitude 9520" Price="30,000" Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHa3ROn6I-UtRYYgMkGg5x1mz-cWRR8BARKQ&usqp=CAU" Description="Dell Latitude 9520 is a Windows 10 laptop with a 15.00-inch display that has a resolution of 1920x1080 pixels." />

                    </div>
                    <div className="col-md-4 sm-10">
                        <SalesCard Name="LG lg16298" Price="5,000" Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoHo6DUYRlk2_vfOIEHWF4nqZpYZgL4L5PA&usqp=CAU" Description="Dell Latitude 9520 is a Windows 10 laptop with a 15.00-inch display that has a resolution of 1920x1080 pixels." />

                    </div>
                    <div className="col-md-4 sm-10">
                        <SalesCard Name="Dell Latitude 9520" Price="3,000" Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qQZkSxojrOU7HDLraLqjsZGcJqIeSlP3xA&usqp=CAU" Description="Ultra high definition digital television screen technology concept: 3D render" />

                    </div>
                </div>


                <div className="SecondRow row">

                    <div className="col-md-4 sm-10">
                        <SalesCard Name="Dell Latitude 9520" Price="100" Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUy5KpcJ3b-lwtCDMoEWN5mzQAIVfMrc7rug&usqp=CAU" Description="Dell Latitude 9520 is a Windows 10 laptop with a 15.00-inch display that has a resolution of 1920x1080 pixels." />

                    </div>
                    <div className="col-md-4 sm-10">
                        <SalesCard Name="Dell Latitude 9520" Price="110" Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfCAs54CS2DsupWOJgQY30ACikBIMdfB84g&usqp=CAU" Description="Dell Latitude 9520 is a Windows 10 laptop with a 15.00-inch display that has a resolution of 1920x1080 pixels." />

                    </div>
                    <div className="col-md-4 sm-10">
                        <SalesCard Name="Dell Latitude 9520" Price="80,000" Image="https://i.gadgets360cdn.com/products/small/dell-latitude-9520-240x180-1622104184.jpg?output-quality=80" Description="Dell Latitude 9520 is a Windows 10 laptop with a 15.00-inch display that has a resolution of 1920x1080 pixels." />

                    </div>
                </div>
                <div className="SecondRow row">

                    <div className="col-md-4 sm-10">
                        <SalesCard Name="Dell Latitude 9520" Price="30,000" Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHa3ROn6I-UtRYYgMkGg5x1mz-cWRR8BARKQ&usqp=CAU" Description="Dell Latitude 9520 is a Windows 10 laptop with a 15.00-inch display that has a resolution of 1920x1080 pixels." />

                    </div>
                    <div className="col-md-4 sm-10">
                        <SalesCard Name="Dell Latitude 9520" Price="30,000" Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHa3ROn6I-UtRYYgMkGg5x1mz-cWRR8BARKQ&usqp=CAU" Description="Dell Latitude 9520 is a Windows 10 laptop with a 15.00-inch display that has a resolution of 1920x1080 pixels." />

                    </div>
                    <div className="col-md-4 sm-10">
                        <SalesCard Name="Dell Latitude 9520" Price="30,000" Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qQZkSxojrOU7HDLraLqjsZGcJqIeSlP3xA&usqp=CAU" Description="Dell Latitude 9520 is a Windows 10 laptop with a 15.00-inch display that has a resolution of 1920x1080 pixels." />

                    </div>
                </div>
                <div className="SecondRow row">

                    <div className="col-md-4 sm-10">
                        <SalesCard Name="Dell Latitude 9520" Price="80,000" Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qQZkSxojrOU7HDLraLqjsZGcJqIeSlP3xA&usqp=CAU" Description="Dell Latitude 9520 is a Windows 10 laptop with a 15.00-inch display that has a resolution of 1920x1080 pixels." />

                    </div>
                    <div className="col-md-4 sm-10">
                        <SalesCard Name="Dell Latitude 9520" Price="80,000" Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qQZkSxojrOU7HDLraLqjsZGcJqIeSlP3xA&usqp=CAU" Description="Dell Latitude 9520 is a Windows 10 laptop with a 15.00-inch display that has a resolution of 1920x1080 pixels." />

                    </div>
                    <div className="col-md-4 sm-10">
                        <SalesCard Name="Dell Latitude 9520" Price="80,000" Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qQZkSxojrOU7HDLraLqjsZGcJqIeSlP3xA&usqp=CAU" Description="Dell Latitude 9520 is a Windows 10 laptop with a 15.00-inch display that has a resolution of 1920x1080 pixels." />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sales
