import React from 'react';
import classes from './Checkbox.module.css';

const Checkbox = (props) => {
    return (
        <label className={classes.wrap}>
            <input type="checkbox" 
            className={classes.input}
            checked={props.checked}
            {...props.dataAttributes} 
            value={props.value}
            name={props.name}  
            onChange={props.onChange}/>
            <span className={classes.styledCheckbox}>{props.title}</span>
        </label>
    );
};

export default Checkbox;