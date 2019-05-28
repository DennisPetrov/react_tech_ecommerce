import React from 'react';
import classes from './Input.module.css';
import InputMask from 'react-input-mask';


const Input = (props) => {
    const inputClasses = [classes.input, classes[props.styleClass]];
    const displayErrorText = props.displayErrorText ? props.displayErrorText : false;
    if (props.error) {
        inputClasses.push(classes.error);
    }
    let Tag;
    let specificProps = {};
    switch (props.tag) {
        case "InputMask":
            Tag = InputMask;
            specificProps.mask = props.mask;
            break;
        case "textarea":
            Tag = "textarea";
            break;
        default:
            Tag = "input";
            specificProps.type = (props.type ? props.type : "text");
    }

    return (
        <div className={classes.wrap}>
            {props.label ?
                <label className={classes.label}
                    htmlFor={props.id ? props.id : ""}>{props.label}</label>
                : ""}
            <Tag
                {...specificProps}
                type={props.type ? props.type : "text"}
                value={props.value}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                {...props.dataAttributes}
                className={inputClasses.join(" ")}
            />
            {displayErrorText && props.error ?
                <div className={classes.errorText}>
                    {props.error}
                </div> : ""}
        </div>
    );
};

export default Input;