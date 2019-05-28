import React, { Component } from 'react';
import classes from './Home.module.css';
import MainSlider from '../../../components/Sliders/MainSlider/MainSlider';
import FilterProductList from '../../Shop/FilterProductList/FilterProductList';
import ReviewsList from '../../../components/Page/ReviewsList/ReviewsList';
import ReviewsSlider from '../../../components/Sliders/ReviewsSlider/ReviewsSlider';

const reviews = [
    {
        "name": "Edwin Kuphal",
        "job": "Forward Group Manager",
        "text": "Rem quisquam sunt. Commodi autem ut labore qui aut ipsa eaque doloribus ut. Cum voluptate animi minus culpa quasi excepturi dolor ut reiciendis. Excepturi deserunt repellendus ex dolor culpa. Placeat et ut aliquid iste commodi aut quia. Cum maiores corporis numquam quos cumque est."
    },
    {
        "name": "Cristian Dare",
        "job": "Central Functionality Producer",
        "text": "Sunt suscipit quos unde placeat quia harum vel. Minima corporis vel."
    },
    {
        "name": "Hilbert VonRueden",
        "job": "Senior Configuration Producer",
        "text": "Aliquam aut est maiores reprehenderit et corrupti repudiandae quia. Nisi minus fugit porro quis. Facilis quo animi voluptas repudiandae cumque alias. Earum qui nesciunt. Eius dolores doloribus fugit distinctio."
    },
    {
        "name": "Dr. Emanuel Altenwerth",
        "job": "Chief Research Specialist",
        "text": "Excepturi maxime fugiat. Reiciendis autem qui et libero iste occaecati."
    },
    {
        "name": "Destin Gleason",
        "job": "Human Communications Supervisor",
        "text": "Rerum a eos quis. Enim est mollitia. Eius architecto dolores sit ut et nihil quae corrupti deserunt."
    },
    {
        "name": "Rocio Kreiger",
        "job": "Investor Operations Coordinator",
        "text": "Minus consequatur qui adipisci dolores. Maxime eum illum est. Error vero sed."
    },
    {
        "name": "Mrs. Alexandro McLaughlin",
        "job": "National Accounts Specialist",
        "text": "Aut laborum nostrum eum. Est quae qui culpa illo voluptate vel. Laudantium qui sequi dolores et reiciendis. Eum aut maxime enim consequatur dolore qui et. Nihil repellat vero harum asperiores voluptatem hic."
    },
    {
        "name": "Ms. Ofelia Lueilwitz",
        "job": "Future Assurance Director",
        "text": "Rerum in et. Reiciendis veritatis sit iusto ut. Iste omnis aspernatur aut sint illo aut explicabo necessitatibus est."
    },
    {
        "name": "Birdie Graham",
        "job": "Chief Assurance Manager",
        "text": "Ut odit tempora eius. Numquam saepe aspernatur sed laborum. Ex rerum cum qui. Qui est est sint commodi consequuntur quia minus laborum. Molestiae perspiciatis praesentium quia sint nulla optio aspernatur autem. Nemo ut rerum iure fuga perspiciatis ut quia et."
    },
    {
        "name": "Annie Harber",
        "job": "Lead Operations Director",
        "text": "Accusamus nisi occaecati delectus fugiat explicabo qui. Consequatur et consequatur libero qui est perferendis est exercitationem aspernatur."
    }
]
class Home extends Component {
    render() {
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
                        <ReviewsSlider reviews={reviews} />
                    </div>
                </section>
            </section>
        );
    }
}

export default Home;