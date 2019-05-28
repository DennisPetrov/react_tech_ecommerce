import React, { Component } from 'react';
import classes from './FooterForm.module.css';
import Input from '../../../components/FormElements/Input/Input';
import { validate } from '../../../helpers/checks';


class FooterForm extends Component {
    state = {
        name: "",
        nameError: "",
        phone: "",
        phoneError: "",
        question: "",
        questionError: "",
    }
    handleInputChange = (event) => {
        const target = event.target;
        let error={
            valid:true,
            message:"",
        }
        if(target.name==="phone"){
            error={
                ...validate(target.value)
            };
        }else if(target.name==="question"){
            error={
                ...validate(target.value)
            };
        }
        this.setState({
            [target.name]: target.value,
            [target.name+"Error"]:error.message
        })
    }
    render() {
        return (
            <div className={classes.wrap}>
                <form className="container">
                    <div className="h1">
                        Ask a question
                    </div>
                    <div className={classes.columns}>
                        <div className={classes.column}>
                            <Input
                                value={this.state.name}
                                name="name"
                                error={this.state.nameError}
                                onChange={this.handleInputChange}
                                label="Name" />
                        </div>
                        <div className={classes.column}>
                            <Input tag="InputMask"
                                value={this.state.phone}
                                name="phone"
                                error={this.state.phoneError}
                                onChange={this.handleInputChange}
                                mask="+7 (999)-999-99-99"
                                label="Phone" />
                        </div>
                    </div>
                    <Input tag="textarea"
                        value={this.state.question}
                        name="question"
                        error={this.state.questionError}
                        onChange={this.handleInputChange}
                        label="Question" />
                </form>
            </div>
        );
    }
}

export default FooterForm;