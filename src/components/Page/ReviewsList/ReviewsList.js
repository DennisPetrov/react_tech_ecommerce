import React from 'react';
import classes from './ReviewsList.module.css';

const ReviewsList = (props) => {
    return (
        <div className={classes.wrap}>
            {props.reviews.map((item) => {
                return (
                    <div className={classes.item}>
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
        </div>
    );
};

export default ReviewsList;