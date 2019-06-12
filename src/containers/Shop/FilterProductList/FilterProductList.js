import React, { Component } from 'react';
import classes from './FilterProductList.module.css';
import ShopFilter from '../../../components/Shop/ShopFilter/ShopFilter';
import ProductList from '../../../components/Shop/ProductList/ProductList';
import { fetchProducts, initialFetch } from '../../../store/actions/shopActions';
import { connect } from 'react-redux';
import ProductListControls from '../../../components/Shop/ProductListControls/ProductListControls';
import Pagination from '../../../components/Shop/Pagination/Pagination';

class FilterProductList extends Component {
    catalogWrapRef = React.createRef();
    state = {
        page: 1,
        itemsPerPage: 15,
        itemsView: "grid",
        sortType: "price-asc",
        filterLoaded: false,
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
    handleSliderChange = (value, filter) => {
        this.setState({
            [filter + "Range"]: value,
            [filter + "min"]: value[0],
            [filter + "max"]: value[1],
            [filter + "minError"]: false,
            [filter + "maxError"]: false
        });
    }
    handleSliderInputChange = (value, filter, type, error) => {
        if (error) {
            this.setState({
                [filter + type + "Error"]: error,
                [filter + type]: value,
            })
        } else {
            this.setState((prevState) => {
                const rangeArray = type === "min" ? [value, prevState[filter + "max"]] : [prevState[filter + "min"], value];
                return {
                    [filter + type]: value,
                    [filter + type + "Error"]: error,
                    [filter + "Range"]: rangeArray
                }
            });
        }
    }

    constructFilterQuery = (options = {}) => {
        const filter = this.props.filter;
        const fetchFilter = {};
        fetchFilter.filters = {};
        for (const key in filter) {
            if (filter[key].type === "check") {
                fetchFilter.filters[key] = {};
                fetchFilter.filters[key].type = "check";
                fetchFilter.filters[key].values = [];
                filter[key].values.forEach((item) => {
                    if (this.state[key + item]) {
                        fetchFilter.filters[key].values.push(item);
                    }
                })
            } else if (filter[key].type === "range") {
                fetchFilter.filters[key] = {};
                fetchFilter.filters[key].type = "range";
                fetchFilter.filters[key].min = this.state[key + "min"] ? this.state[key + "min"] : filter[key].min;
                fetchFilter.filters[key].max = this.state[key + "max"] ? this.state[key + "max"] : filter[key].max;
            }
        }
        fetchFilter.sortType = this.state.sortType;
        fetchFilter.page = this.state.page;
        fetchFilter.itemsPerPage = this.state.itemsPerPage;
        fetchFilter.additiveQuery = options.additiveQuery ? options.additiveQuery : false;
        return fetchFilter;
    }
    applyFilter = () => {
        this.setState({
            page: 1
        }, () => {
            this.performProductsFetch();
        })
    }
    performProductsFetch = (options = {}) => {
        this.props.fetchProducts(this.constructFilterQuery(options));
    }
    // Function used both to reset inputs to initial state,
    // and to set state after filter information was loaded.
    resetFilter = () => {
        const filter = this.props.filter;
        if (filter) {
            for (const key in filter) {
                if (filter[key].type === "check") {
                    filter[key].values.forEach((item) => {
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
                        [key + "Range"]: [filter[key].min, filter[key].max]
                    })
                }
            }
        }
    }
    componentDidMount() {
        this.props.initialFetch(this.constructFilterQuery());
    }
    switchPage = (event) => {
        this.setState({
            page: parseInt(event.currentTarget.dataset.page),
            additiveQuery: false,
        }, () => {
            this.performProductsFetch();
        })
    }
    getMoreProducts = () => {
        this.setState((prevState) => {
            return {
                page: prevState.page + 1,
            }
        }, () => {
            this.performProductsFetch({ additiveQuery: true });
        })
    }
    handleControlsChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        }, () => {
            this.performProductsFetch();
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const newState = {};
        const filter = nextProps.filter;
        if (!prevState.filterLoaded && filter) {
            newState.filterLoaded = true;
            for (const key in filter) {
                if (filter[key].type === "check") {
                    filter[key].values.forEach((item) => {
                        newState[key + item] = false;
                    })
                } else if (filter[key].type === "range") {
                    newState[key + "min"] = filter[key].min;
                    newState[key + "max"] = filter[key].max;
                    newState[key + "minError"] = false;
                    newState[key + "maxError"] = false;
                    newState[key + "Range"] = [filter[key].min, filter[key].max];
                }
            }
        }
        return newState;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.productList !== this.props.productList && prevProps.productList.length) {
            if (!this.props.additiveFetch &&
                (this.catalogWrapRef.current.offsetTop > window.pageYOffset + window.innerHeight ||
                    this.catalogWrapRef.current.offsetTop < window.pageYOffset)) {
                window.scrollTo({
                    top: this.catalogWrapRef.current.offsetTop,
                    behavior: 'smooth'
                })
            }
        }
    }

    render() {
        return (
            <section className={classes.wrap}>
                <div className={`container ${classes.container}`}>
                    <ShopFilter toggleTabState={this.toggleTabState}
                        {...this.state}
                        applyFilter={this.applyFilter}
                        resetFilter={this.resetFilter}
                        validateSliderInputs={this.validateSliderInputs}
                        handleSliderChange={this.handleSliderChange}
                        handleSliderInputChange={this.handleSliderInputChange}
                        onChange={this.handleInputChange}
                        wrapClass={classes.filter}
                        loaded={this.state.filterLoaded}
                        filter={this.props.filter} />
                    <div ref={this.catalogWrapRef} className={classes.productList} >
                        <ProductListControls
                            handleControlsChange={this.handleControlsChange}
                            itemsPerPage={this.state.itemsPerPage}
                            sortType={this.state.sortType}
                            itemsView={this.state.itemsView} />
                        <ProductList
                            loading={this.props.productsLoading}
                            products={this.props.productList} />
                        <Pagination
                            currentPage={this.state.page}
                            switchPage={this.switchPage}
                            itemsPerPage={this.state.itemsPerPage}
                            totalCount={this.props.productsCurrentTotalCount}
                            getMoreElements={this.getMoreProducts} />
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.shop.productList,
        productsLoading: state.shop.productsLoading,
        productsCurrentTotalCount: state.shop.productsCurrentTotalCount,
        filter: state.shop.filter,
        additiveFetch: state.shop.additiveFetch
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (options) => dispatch(fetchProducts(options)),
        initialFetch: (options) => dispatch(initialFetch(options))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterProductList);