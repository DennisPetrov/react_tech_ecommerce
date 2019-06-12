import React from 'react';
import classes from './ProductListControls.module.css';
import Select from '../../FormElements/Select/Select';

const ProductListControls = (props) => {
    return (
        <div className={classes.wrap}>
            <div className={classes.paginationSettingsWrap}>
                <Select onChange={props.handleControlsChange}
                name="itemsPerPage"
                    value={props.itemsPerPage}
                    options={[
                        {
                            value: 15,
                        },
                        {
                            value: 30,
                        },
                        {
                            value: 45
                        },
                        {
                            value: 90
                        },
                        {
                            value: "all"
                        }
                    ]}
                />
            </div>
            <div className={classes.sortWrap}>
                <Select onChange={props.handleControlsChange}
                name="sortType"
                    value={props.sortType}
                    options={[
                        {
                            value: "price-asc",
                            title: "Price ascending"
                        },
                        {
                            value: "price-desc",
                            title: "Price descending"
                        },
                        {
                            value: "rating",
                            title: "Rating"
                        },
                        {
                            value: "name",
                            title: "Name"
                        }
                    ]}
                />
            </div>
            <div>
                <Select onChange={props.handleControlsChange}
                    value={props.itemsView}
                    name="itemsView"
                    options={[
                        {
                            value: "grid",
                        },
                        {
                            value: "line",
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default React.memo(ProductListControls);