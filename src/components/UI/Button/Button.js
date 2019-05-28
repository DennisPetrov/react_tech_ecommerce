import React from 'react';
import classes from './Button.module.css';
import {Link} from 'react-router-dom';

const Button = (props) => {
    let Tag;
    switch(props.type){
        case "link":{
            Tag=Link;
            break;
        }
        default:{
            Tag="button";
        }
    }
    const buttonClasses=[classes.btn];
    if(props.styleClass){
        buttonClasses.push(classes[props.styleClass]);
    }
    if(props.className){
        buttonClasses.push(props.className);
    }

    return (
        <Tag to={props.to} onClick={props.onClick} className={buttonClasses.join(" ")}>
            {props.children}
        </Tag>
    );
};

export default Button;