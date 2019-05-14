import React, { Component } from 'react'
import Header from './../components/Layout/Header/Header';
import Footer from './../components/Layout/Footer/Footer';


class Layout extends Component {
    render () {
        return (
            <div>
                <Header/>
                <h1>Layout</h1>
                <div>
                    {this.props.childs}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Layout