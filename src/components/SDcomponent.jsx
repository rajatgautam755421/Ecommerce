
import React from 'react'
import './SDcomponent.css'
const Sdcomponent = ({ text, Icon }) => {
    return (
        <>
            <div className="Sdcomponent">
                <Icon className="Sdcomponent__icon" />
                <h2 className="sdcomponent__text">{text}</h2>
            </div>
        </>
    )
}

export default Sdcomponent
