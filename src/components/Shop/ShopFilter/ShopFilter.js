import React from 'react';
import classes from './ShopFilter.module.css';
import Checkbox from '../../FormElements/Checkbox/Checkbox';
import Input from '../../FormElements/Input/Input';
import RangeWrap from '../../FormElements/RangeWrap/RangeWrap';
import Button from '../../UI/Button/Button';
import Loading from '../../UI/Loading/Loading';



const printFilters = (props) => {
    const filters = [];
    for (const key in props.filter) {
        filters.push(printSingleFilter(key, props));
    }
    return filters;
}
const printSingleFilter = (key, props) => {
    let filter;
    const item = props.filter[key];
    switch (item.type) {
        case "range":
            filter = printRangeFilter(key, item, props);
            break;
        default:
            filter = printCheckFilter(key, item, props);
    }
    return (
        <div className={`${classes.tab} ${props[key + "ActiveTab"] ? classes.tabActive : ""}`} key={key}>
            <div className={classes.tabTitle} data-filter={key} onClick={props.toggleTabState}>
                {item.name}
            </div>
            <div className={classes.tabItem}>
                <div >
                    {filter}
                </div>
            </div>
        </div>
    )
}
const printCheckFilter = (filter, item, props) => {
    return item.values.map((name, index) => {
        return <Checkbox key={index}
            name={filter + name}
            checked={props[filter + name]}
            onChange={props.onChange}
            dataAttributes={{
                "data-filter": filter
            }}
            title={name} />
    })
}
const printRangeFilter = (filter, item, props) => {
    return (
        <RangeWrap min={item.min}
            name={filter}
            label={props.filter[filter].name}
            inputStyleClass="white"
            max={item.max}
            valueSlider={props[filter + "Range"]}
            valueMin={props[filter + "min"]}
            valueMax={props[filter + "max"]}
            errorMin={props[filter + "minError"]}
            errorMax={props[filter + "maxError"]}
            handleSliderInputChange={props.handleSliderInputChange}
            handleSliderChange={props.handleSliderChange} />);
}
const ShopFilter = (props) => {
    return (
        <div className={classes.wrap}>
            {props.filter && props.loaded ?
                <React.Fragment>
                    <div className={classes.group}>
                        {printFilters(props)}
                    </div>
                    <div className={classes.applyWrap}>
                        <Button onClick={props.applyFilter} className={classes.filterControl}>Apply filter</Button>
                        <Button onClick={props.resetFilter} styleClass="bluewood" className={classes.filterControl}>Reset</Button>
                    </div>
                </React.Fragment>
                :
                <Loading visible={true} width={150}  />
            }
        </div>
    );
};

export default ShopFilter;