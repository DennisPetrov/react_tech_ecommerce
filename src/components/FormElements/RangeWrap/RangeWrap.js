import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Input from '../../FormElements/Input/Input';
import { checkIfNumber } from '../../../helpers/checks';
import classes from './RangeWrap.module.css';

const Range = Slider.Range;

const RangeWrap = (props) => {

    const handleSliderChange=(value) => {
        props.handleSliderChange(value,props.name);
    }
    const handleSliderInputChange=(event)=>{
        const target = event.target;
        const value =  parseInt(target.value);
        const type=target.dataset.rangeType;
        let error=false;
        
        if(checkIfNumber(value)){
            if(value<props.min){
                error="Input value should be equal or greater than minimal price value: "+props.min;
            }else if(value>props.max){
                error="Input value should be equal or less than maximum price value: "+props.max;
            }else{
                if(type==="min" && value>props.valueMax){
                    error="Input value should be equal or less than uppper bound value.";
                }else if(type==="max" && value<props.valueMin){
                    error="Input value should be equal or more than lower bound value.";
                }
            }
        }else{
            error="Input value should be a number.";
        }
        props.handleSliderInputChange(value,props.name,type,error);
    }
    return (
        <div>
            <Range allowCross={false}
                value={props.valueSlider}
                min={props.min}
                onChange={handleSliderChange}
                className={classes.rangeWrap}
                marks={{
                    [props.min]:props.min,
                    [props.max]:props.max,
                }}
                max={props.max} />
            <Input styleClass={props.inputStyleClass}
                value={props.valueMin}
                name={props.name+"min"}
                dataAttributes={{
                    "data-range-type": "min",
                    "data-filter": props.name
                }}
                displayErrorText={true}
                error={props.errorMin}
                onChange={handleSliderInputChange}
                label={`Min ${props.label}:`} />
            <Input styleClass={props.inputStyleClass}
                value={props.valueMax}
                name={props.name+"max"}
                dataAttributes={{
                    "data-range-type": "max",
                    "data-filter": props.name
                }}
                displayErrorText={true}
                error={props.errorMax}
                onChange={handleSliderInputChange}
                label={`Max ${props.label}:`} />
        </div>
    );
};

export default RangeWrap;