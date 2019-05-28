import React from 'react';
import Slider from 'react-slick';
import Button from '../../UI/Button/Button';
import classes from './MainSlider.module.css';
import { NextArrow, PrevArrow } from '../SliderNav/SliderNav';


const MainSlider = () => {
    const settings = {
        slidesToShow: 1,
        slideToScroll: 1,
        dots: true,
        nav: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dotsClass:`slick-dots ${classes.dots}`
    }
    return (
        <Slider className={`styled__slider ${classes.slider}`} {...settings}>
            <div className="slide">
                <div className="container">
                    <div className={classes.slide}>
                        <div className={classes.slideContent}>
                            <div className={classes.title}>
                                iPhone 6 32Gb Black
                        </div>
                            <div className={classes.text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Veniam reiciendis consequatur recusandae dolor odit,
                                quis quos dolorum quo. Ea minima deleniti ipsam et quo officia inventore iusto. Ut, perferendis magnam!
                        </div>
                            <div className={classes.button}>
                                <Button type="link" to="/">Buy now</Button>
                            </div>
                        </div>
                        <div className={classes.imageWrap}>
                            <img className={classes.image} src="/images/slide.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide">
                <div className="container">
                    <div className={classes.slide}>
                        <div className={classes.slideContent}>
                            <div className={classes.title}>
                                iPhone 6 32Gb Black
                        </div>
                            <div className={classes.text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Veniam reiciendis consequatur recusandae dolor odit,
                                quis quos dolorum quo. Ea minima deleniti ipsam et quo officia inventore iusto. Ut, perferendis magnam!
                        </div>
                            <div className={classes.button}>
                                <Button type="link" to="/">Buy now</Button>
                            </div>
                        </div>
                        <div className={classes.imageWrap}>
                            <img className={classes.image} src="/images/slide.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide">
                <div className="container">
                    <div className={classes.slide}>
                        <div className={classes.slideContent}>
                            <div className={classes.title}>
                                iPhone 6 32Gb Black
                        </div>
                            <div className={classes.text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Veniam reiciendis consequatur recusandae dolor odit,
                                quis quos dolorum quo. Ea minima deleniti ipsam et quo officia inventore iusto. Ut, perferendis magnam!
                        </div>
                            <div className={classes.button}>
                                <Button type="link" to="/">Buy now</Button>
                            </div>
                        </div>
                        <div className={classes.imageWrap}>
                            <img className={classes.image} src="/images/slide.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default MainSlider;