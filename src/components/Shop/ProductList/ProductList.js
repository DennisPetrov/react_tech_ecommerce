import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import classes from './ProductList.module.css';

const ProductList = (props) => {
    return (
        <section className={props.wrapClass}>
            <div className={classes.wrap} >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
};

export default ProductList;