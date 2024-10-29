import React from 'react';

const Card = ({ image, title, description }) => {
    return (
        <li class="feature-item">
            <img src={image} alt="Icon" class="feature-icon" />
            <h3 class="feature-item-title">{title}</h3>
            <p>{description}</p>
        </li>
    );
};

export default Card;