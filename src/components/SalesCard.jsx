import React from 'react';
import './SalesCard.css';
import Button from './Button';
import { Link } from 'react-router-dom';
import ItemInfo from './ItemInfo'


export const SalesCard = ({ Name, Price, Image, Description, selected, EP, id }) => {
    return (
        <>
            <div className="card uk-card-hover" id="gallery" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                <img className="card__image" src={Image} alt="Avatar" />
                <div className="container">

                    <div className="helllo">
                        <h5 className={` ${selected && 'selected'}`}>Rs.{Price} </h5>
                        <h5 className="CARD___h5"> Rs.{EP} </h5>
                    </div>
                    <h4 className="Card__h4">{Name}</h4>
                    <p className="Card__p">{Description}</p>
                    <Link to={`/item/${id}`}>
                        <Button className="Card__Button" text="Know More" />
                    </Link>
                </div>
            </div>
        </>
    )
}



export const SalesCard1 = ({ Name, Price, Image, Description, selected, EP }) => {
    return (
        <div>
            <ItemInfo Name={Name} Price={Price} Image={Image} Description={Description} />

        </div>
    )
}




