import React from 'react';
import classes from './ProductCard.module.css';
import Button from '../../UI/Button/Button';

const ProductCard = () => {
    return (
        <div className={classes.wrap}>
            <div className={classes.inner}>
                <div className={classes.imageWrap}>
                    <img src="/images/laptop.svg" alt="Apple TV 32GB" className={classes.image} />
                </div>
                <div className={classes.title}>
                    Apple TV 32GB
                </div>
                <div className={classes.color}>
                    Black
                </div>
                <div className={classes.price}>
                    $49.99
                </div>
                <div className={classes.controls}>
                    <Button>BUY</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;