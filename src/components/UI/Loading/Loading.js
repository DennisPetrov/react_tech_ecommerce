import React from 'react';
import classes from './Loading.module.css';

const Loading = (props) => {
    return (
        <div
            className={classes[props.styleClass]}
            style={{
                display: props.visible ? "block" : "none"
            }}>
            <img src="/images/loading.svg"
                style={{
                    width: props.width ? props.width : 100,
                }}
                className={classes.image}
                alt="Loading" />
        </div>
    );
};

export default Loading;