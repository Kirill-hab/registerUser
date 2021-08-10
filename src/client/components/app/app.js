import React, {Component} from "react";

import {Form} from "../form";

import "./app.css"
import UserActions from "../actions/user-actions";
import {Header} from "../header";


export default class App extends Component {
    state = {
        action: false,
        message: '',
    }

    setMessage = (message) => {
        this.setState({message})
    }

    registrationUser = (data) => {
        UserActions.createUser(data, this.setMessage)
    }

    loginUser = (data) => {
        UserActions.loginUser(data, this.setMessage)
    }


    upDateStatus = () => {
        this.setState({action: !this.state.action})
    }

    render() {
        const {action, message} = this.state

        return (
            <div>
                <Header
                    upStatus={this.upDateStatus}
                    statusApp={action}
                />

                <Form
                    onAddUser={this.registrationUser}
                    loginUser={this.loginUser}
                    messFun={this.setMessage}
                    statusApp={action}
                    message={message}
                />
            </div>
        )
    }
}