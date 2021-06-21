import React from 'react'

const TOpNavItem = ({ text, Icon }) => {
    return (
        <>
            <div className="combo" style={{ display: "flex", marginTop: "10px", marginBottom: "20px", justifyContent: "left", width: "100%", fontSize: "20px" }}>
                <Icon style={{ marginRight: "5px", color: "black", justifyContent: "center" }} />
                <h3 style={{ textAlign: "center", color: "black", fontSize: "20px", cursor: "pointer", textDecoration: "none" }} > {text}</h3>
            </div>

        </>
    )
}

export default TOpNavItem


