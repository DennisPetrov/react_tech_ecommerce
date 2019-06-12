import React from 'react';
import classes from './ProductCard.module.css';
import Button from '../../UI/Button/Button';

const ProductCard = (props) => {
    const rating=props.rating.toFixed(1);
    const ratingFill=rating*10;
    const gradId="grad"+props.id;
    return (
        <div className={classes.wrap}>
            <div className={classes.inner}>
                <div className={classes.rating}>
                    <svg viewBox="0 0 32 32" className={classes.ratingIcon}>
                    <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="100%">
                    <stop offset={`${100-ratingFill}%`} stopColor="grey"/>
                    <stop offset={`${ratingFill}%`} stopColor="#FFD700"/>
                    </linearGradient>
                    <path d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z" fill={`url(#${gradId})`}/>
                    </svg>
                    <span className={classes.ratingNumber}>{props.rating.toFixed(1)}</span>
                </div>
                <div className={classes.imageWrap}>
                    <img src={props.image} alt={props.name} className={classes.image} />
                </div>
                <div className={classes.title}>
                    {props.name}
                </div>
                <div className={classes.color}>
                    {props.colors}
                </div>
                <div className={classes.price}>
                    ${props.price}
                </div>
                <div className={classes.controls}>
                    <Button>BUY</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;