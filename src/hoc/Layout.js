import React, { Component } from 'react'
import Header from './../components/Layout/Header/Header';
import Footer from './../components/Layout/Footer/Footer';
import { connect } from 'react-redux';
import { searchFast } from '../store/actions/shopActions';
import ErrorNotification from '../components/UI/ErrorNotification/ErrorNotification';


class Layout extends Component {
    state = {
        showError: false,
    }
    componentDidUpdate(prevProps) {
        if (prevProps.lastErrorTime !== this.props.lastErrorTime) {
            this.showError();
        }
    }

    showError = () => {
        if (!this.state.showError) {
            this.setState({
                showError: true,
            });
            setTimeout(() => {
                this.setState({
                    showError: false
                })
            }, 5000);
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div>
                    {this.props.children}
                </div>
                <Footer />
                <ErrorNotification showError={this.state.showError} errorText={this.props.lastError} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lastError: state.error.errorText,
        lastErrorTime: state.error.errorTime
    }
}
const mapDispatchToProps = dispatch => {
    return {
        searchFast: (subject) => dispatch(searchFast(subject))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);