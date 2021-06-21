import React, { useState, useEffect } from 'react';
import { useParams, useRouteMatch, Link } from 'react-router-dom'
import axios from 'axios'

const Addtocard = () => {
    let id = useParams();
    console.log(id.id)
    let { path, url } = useRouteMatch();
    console.log(path)

    const [value, setValue] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/ios/${id.id}`);

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
        <div>
            <h1>Hello world</h1>
        </div>
    )
}

export default Addtocard
