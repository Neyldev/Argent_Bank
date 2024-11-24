import React from 'react';

const Card = ({ image, title, description }) => {
    return (
        <li className="feature-item">
            <img src={image} alt="Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </li>
    );
};

export default Card;