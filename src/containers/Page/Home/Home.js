import React, { Component } from 'react';
import classes from './Home.module.css';
import MainSlider from '../../../components/Sliders/MainSlider/MainSlider';
import FilterProductList from '../../Shop/FilterProductList/FilterProductList';
import ReviewsList from '../../../components/Page/ReviewsList/ReviewsList';
import ReviewsSlider from '../../../components/Sliders/ReviewsSlider/ReviewsSlider';
import { connect } from 'react-redux';
import { fetchReviewsList } from '../../../store/actions/mainActions';



class Home extends Component {
    componentDidMount() {
        this.props.fetchReviewsList();
    }
    
    render() {
        console.log(this.props.reviewsList)
        return (
            <section className="home__page">
                <section className="main__slider__wrap">
                    <MainSlider />
                </section>
                <section className="main__filter__list">
                    <FilterProductList />
                </section>
                <section className="main__reviews">
                    <div className="container">
                        <div className="h1">
                        What Our Customers Have to Say
                        </div>
                        <ReviewsSlider reviews={this.props.reviewsList} />
                    </div>
                </section>
            </section>
        );
    }
}


const mapStateToProps=(state) => {
    return {
        reviewsList:state.main.reviewsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviewsList : () => dispatch(fetchReviewsList())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Home);