import React from 'react';
import classes from './ErrorNotification.module.css';

const ErrorNotification = (props) => {
    const popupClasses=[classes.wrap];
    if(!props.showError){
        popupClasses.push(classes.hide);
    }
    return (
        <div className={popupClasses.join(" ")}>
            {props.errorText}
        </div>
    );
};


export default React.memo(ErrorNotification);