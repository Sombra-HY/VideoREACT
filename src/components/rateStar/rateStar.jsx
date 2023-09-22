import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

import './style.css';

export const RateStar = ({ rate }) => {
    const renderStars = () => {
        const stars = [];
        const starclass = 'starItem';
        let cont = Math.round(rate);

        for (let i = 0; i < 5; i++) {
            stars.push(
                cont >= 2 ? (
                    <BsStarFill className={starclass} />
                ) : cont <= 0 ? (
                    <BsStar className={starclass} />
                ) : (
                    <BsStarHalf className={starclass} />
                ),
            );
            cont = cont - 2;
        }

        return stars;
    };

    return <div className="boxStars">{renderStars()}</div>;
};
