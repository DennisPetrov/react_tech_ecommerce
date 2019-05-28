import React from 'react';
import classes from './SliderNav.module.css';

export function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <button
            className={className + " " + classes.nextArrow + " " + classes[props.styleClass]}
            onClick={onClick}
        />
    );
}

export function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button
            className={className + " " + classes.prevArrow + " " + classes[props.styleClass]}
            onClick={onClick}
        />
    );
}