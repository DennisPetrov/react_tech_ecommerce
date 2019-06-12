import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import classes from './ProductList.module.css';
import Loading from '../../UI/Loading/Loading';

const ProductList = (props) => {
    return (
        <section className={props.wrapClass}>
            <div className={classes.wrap} >
                {props.products.length ?
                    props.products.map((item) =>
                        (<ProductCard key={item.id} {...item} />)
                    )
                    : <p>Nothing was found. Please try another search query.</p>}
                <Loading visible={props.loading} width={250} styleClass="whole" />
            </div>
        </section>
    );
};

export default React.memo(ProductList);