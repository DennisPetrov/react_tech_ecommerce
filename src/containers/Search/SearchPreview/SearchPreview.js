import React, { Component } from 'react';
import Input from '../../../components/FormElements/Input/Input';
import classes from './SearchPreview.module.css';
import Button from '../../../components/UI/Button/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchFast } from '../../../store/actions/searchActions';
import { PageList } from '../../../config/PageList';
import debounce from 'lodash.debounce';
import Loading from '../../../components/UI/Loading/Loading';

class SearchPreview extends Component {
    constructor(props) {
        super(props);
        this.searchWrapper = React.createRef();
        this.state = {
            searchSubject: "",
            searchResultVisible: false
        }
    }
    toggleVisibilityOfSearchResult = (visible) => {
        this.setState({
            searchResultVisible: visible
        })
    }
    performSearch = debounce(() => {
        this.props.searchFast(this.state.searchSubject);
        this.toggleVisibilityOfSearchResult(true);
    }, 1000);

    submitSearch = (event) => {
        event.preventDefault();
        this.performSearch();
    }
    handleSearchInputChange = (event) => {
        this.setState({
            searchSubject: event.target.value
        })
        this.performSearch();
    }
    handleClickOutside = (event) => {
        if (this.searchWrapper.current && !this.searchWrapper.current.contains(event.target)) {
            this.closeSearchList();
        }
    }
    closeSearchList = () => {
        this.toggleVisibilityOfSearchResult(false)
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    renderFastSearch = () => {
        if (this.props.searchResult.length) {
            return <React.Fragment>
                {this.props.searchResult.map((item) => {
                    return <div className={classes.searchResultItem} key={item.id}>
                        <Link to={`/shop/products/${item.id}`}>{item.name}</Link>
                    </div>
                })}
                <div>
                    <Button type="link"
                        to={`${PageList.searchPage.path}?name_like=${this.state.searchSubject}`}>
                        Check all results
                    </Button>
                </div>
            </React.Fragment>;
        } else {
            return <React.Fragment><p>Nothing was found</p><div>
                <Button type="link"
                    to={PageList.searchPage.path}>
                    Extended search
                </Button>
            </div></React.Fragment>
        }
    }
    render() {
        return (
            <form onSubmit={this.submitSearch} 
            ref={this.searchWrapper} 
            className={classes.wrap + " " + (this.props.wrapClass ? this.props.wrapClass: "" )}>
                <Input onChange={this.handleSearchInputChange}
                    val={this.props.searchSubject}
                    placeholder="Start typing to see suggestions" />
                <button onClick={this.performSearch} className={classes.search__button}></button>
                <div className={`${classes.searchResult} ${this.state.searchResultVisible ? "" : classes.searchResultHidden}`}>
                    <span onClick={this.closeSearchList} className={classes.closeSearchList}>&times;</span>
                    <Loading width={150} visible={this.props.searchFastLoading}/>
                    <div style={{
                        display:this.props.searchFastLoading ? "none" : "block"
                    }}>
                        {this.renderFastSearch()}
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchResult: state.search.searchFastResult,
        searchFastLoading: state.search.searchFastLoading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        searchFast: (subject) => dispatch(searchFast(subject))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPreview);