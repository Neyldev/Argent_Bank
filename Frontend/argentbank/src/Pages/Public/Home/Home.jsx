import React from 'react';

import Card from '@/Components/Card.jsx';
import Banner from '@/Components/Banner.jsx';

import AboutList from '@/assets/Data/AboutList.json';

const Home = () => {
    return (
        <div>
            <Banner />
            <ul className='features'>
                <h2 className="sr-only">Features</h2>
                {
                    AboutList.map((card, index) => (
                        <Card
                            key={index}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default Home;
