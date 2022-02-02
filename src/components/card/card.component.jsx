import React from "react";
import './card.style.css';

export const Card = (properti) => (
    <div className="card-container">
        <img alt="dedemit" src={`https://robohash.org/${properti.namaSiluman.id}?set=set2&size=180x180`} />
        <h2> {properti.namaSiluman.name} </h2>
        <p> {properti.namaSiluman.email} </p>
        {/* <h4> {properti.namaSiluman.id} </h4> */}
    </div>
)