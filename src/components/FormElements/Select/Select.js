import React from 'react';
import classes from '../Input/Input.module.css';

const Select = (props) => {
    const inputClasses=[classes.input];
    const displayErrorText = props.displayErrorText ? props.displayErrorText : false;
    if(props.error) inputClasses.push(classes.error);
    return (
        <div className={classes.wrap}>
            <label className={classes.label}
                htmlFor={props.id ? props.id : ""}>
                {props.label}
            </label>
            <select className={inputClasses.join(" ")}
                value={props.value}
                name={props.name}
                id={props.id}
                onChange={props.onChange}
            >
                {props.options.map((item, key) => 
                    <option value={item.value} key={key}>{item.title ? item.title : item.value}</option>
                )}
            </select>
            {displayErrorText && props.error ?
                <div className={classes.errorText}>
                    {props.error}
                </div> : ""}
        </div>
    );
};

export default Select;