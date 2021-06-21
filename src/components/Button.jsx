import React from 'react';
import "./Button.css"


const Button = ({ text }) => {
    return (
        <>
            <button type="submit" class="button"><span>{text}</span></button>
        </>
    )
}

export default Button
