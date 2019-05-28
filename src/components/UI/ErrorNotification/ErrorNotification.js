import React from 'react';
import classes from './ErrorNotification.module.css';

const ErrorNotification = (props) => {
    console.log(1);
    const popupClasses=[classes.wrap];
    if(!props.showError){
        popupClasses.push(classes.fade);
    }
    return (
        <div className={popupClasses.join(" ")}>
            {props.errorText}
        </div>
    );
};


export default ErrorNotification;