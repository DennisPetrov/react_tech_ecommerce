import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../SliderNav/SliderNav';
import classes from './ReviewsSlider.module.css'

const ReviewsSlider = (props) => {
    const settings = {
        slidesToShow: 3,
        slideToScroll: 3,
        dots: true,
        nav: true,
        arrows: true,
        nextArrow: <NextArrow styleClass="black" />,
        prevArrow: <PrevArrow styleClass="black" />,
        dotsClass: `slick-dots ${classes.dots}`
    }
    return (
        <Slider className={`styled__slider slider--margin styled__slider--gray ${classes.slider}`} {...settings}>
            {props.reviews.map((item,index) => {
                return (
                    <div key={index} className={classes.item}>
                        <div className={classes.name}>
                            {item.name}
                        </div>
                        <div className={classes.job}>
                            {item.job}
                        </div>
                        <div className={classes.text}>
                            {item.text}
                        </div>
                    </div>
                )
            })}
        </Slider>
    );
};

export default ReviewsSlider;