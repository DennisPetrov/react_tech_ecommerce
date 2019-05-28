import React, { Component } from 'react';
import Input from '../../../components/FormElements/Input/Input';
import classes from './SearchPreview.module.css';
import Button from '../../../components/UI/Button/Button';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { searchFast } from '../../../store/actions/shopActions';

class SearchPreview extends Component {
    constructor(props){
        super(props);
        this.searchWrapper=React.createRef();
        this.state={
            searchSubject:"",
            searchResultVisible:true 
        }
    }
    toggleVisibilityOfSearchResult = (visible) => {
        this.setState({
            searchResultVisible:visible
        })
    }
    performSearch = () => {
        this.props.searchFast(this.state.searchSubject);
        this.toggleVisibilityOfSearchResult(true);
    }
    handleSearchInputChange = (event) => {
        this.setState({
            searchSubject:event.target.value
        })
    }
    handleClickOutside = (event) => {
        if (this.searchWrapper.current && !this.searchWrapper.current.contains(event.target)) {
            this.toggleVisibilityOfSearchResult(false);
          }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    render() {
        return (
            <div ref={this.searchWrapper} className={classes.wrap + " " + this.props.wrapClass}>
                <Input onChange={this.handleSearchInputChange}
                    val={this.props.searchSubject}
                    placeholder="Start typing to see suggestions" />
                <button onClick={this.performSearch} className={classes.search__button}></button>
                {(this.props.searchResult.length && this.state.searchResultVisible) ? 
                <div className={classes.searchResult}> 
                {this.props.searchResult.map((item) => {
                    return <div className={classes.searchResultItem} key={item.id}>
                        <Link to={`/shop/products/${item.id}`}>{item.name}</Link>
                    </div>
                })}</div>
                    : ""}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchError:state.shop.searchError,
        searchResult:state.shop.searchResult
    }
}
const mapDispatchToProps = dispatch => {
    return {
        searchFast:(subject) => dispatch(searchFast(subject))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchPreview);