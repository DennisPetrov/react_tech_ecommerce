import React, { Component } from 'react';
import classes from './FilterProductList.module.css';
import ShopFilter from '../../../components/Shop/ShopFilter/ShopFilter';
import ProductList from '../../../components/Shop/ProductList/ProductList';
const filter = {
    "color": {
        "name": "Color",
        "values": [
            "gray",
            "gold",
            "black"
        ],
        "type": "check"
    },
    "category": {
        "name": "Category",
        "values": [
            "Laptop",
            "Tablet",
            "Smartphone"
        ],
        "type": "check"
    },
    "brand": {
        "name": "Brand",
        "values": [
            "Brand1",
            "Brand3",
            "Brand2"
        ],
        "type": "check"
    },
    "ram": {
        "name": "RAM",
        "values": [
            1,
            2,
            3,
            4,
            6,
            8,
            16
        ],
        "type": "check"
    },
    "hdd": {
        "name": "HDD",
        "values": [
            4,
            8,
            16,
            32,
            64,
            128,
            512,
            1024,
            2048
        ],
        "type": "check"
    },
    "display": {
        "name": "Display size",
        "values": [
            4.5,
            5,
            5.5,
            6,
            7,
            9.7,
            10,
            11.6,
            12.2,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24
        ],
        "type": "check"
    },
    "price": {
        "name": "Price",
        "min": 2,
        "max": 990,
        "type": "range"
    }
}
class FilterProductList extends Component {
    state = {
        filterSet: false
    }
    toggleTabState = (event) => {
        const currentFilter = event.target.dataset.filter + "ActiveTab";
        this.setState((prevState) => {
            return {
                [currentFilter]: !prevState[currentFilter],
            }
        })
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [target.name]: value
        });
    }
    handleSliderChange = (value,filter) => {
        this.setState({
            [filter+"Range"]:value,
            [filter+"min"]:value[0],
            [filter+"max"]:value[1],
            [filter+"minError"]:false,
            [filter+"maxError"]:false
          });
    }
    handleSliderInputChange = (value,filter,type,error) => {
        if(error){
            this.setState({
                [filter+type+"Error"]:error,
                [filter+type]: value,
            })
        }else{
            this.setState((prevState) => {
                const rangeArray= type==="min" ? [value,prevState[filter+"max"]] : [prevState[filter+"min"],value];
                return {
                    [filter+type]: value,
                    [filter+type+"Error"]:error,
                    [filter + "Range"]: rangeArray
                }
            });
        }
    }
    applyFilter = (event) => {
        
    }
    resetFilter = () =>{
        for (const key in filter) {
            if (filter[key].type === "check") {
                filter[key].values.map((item) => {
                    this.setState({
                        [key + item]: false,
                    })
                })
            } else if (filter[key].type === "range") {
                this.setState({
                    [key + "min"]: filter[key].min,
                    [key + "max"]: filter[key].max,
                    [key + "minError"]: false,
                    [key + "maxError"]: false,
                    [key+"Range"]:[filter[key].min,filter[key].max]
                })
            }
        }
    }
    componentDidMount() {
        for (const key in filter) {
            this.setState({
                [key + "ActiveTab"]: false,
            })
            if (filter[key].type === "check") {
                filter[key].values.map((item) => {
                    this.setState({
                        [key + item]: false,
                    })
                })
            } else if (filter[key].type === "range") {
                this.setState({
                    [key + "min"]: filter[key].min,
                    [key + "max"]: filter[key].max,
                    [key + "minError"]: false,
                    [key + "maxError"]: false,
                    [key+"Range"]:[filter[key].min,filter[key].max]
                })
            }
        }
        this.setState({
            filterSet: true,
        })

    }

    render() {
        return (
            <section className={classes.wrap}>
                {
                    this.state.filterSet ? <div className={`container ${classes.container}`}>
                        <ShopFilter toggleTabState={this.toggleTabState}
                            {...this.state}
                            applyFilter={this.applyFilter}
                            resetFilter={this.resetFilter}
                            validateSliderInputs={this.validateSliderInputs}
                            handleSliderChange={this.handleSliderChange}
                            handleSliderInputChange={this.handleSliderInputChange}
                            onChange={this.handleInputChange}
                            wrapClass={classes.filter}
                            filter={filter} />
                        <ProductList wrapClass={classes.productList} />
                    </div> : ""
                }

            </section>
        );
    }
}

export default FilterProductList;