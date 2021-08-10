import React, {Component} from "react";

import "./form.css"

export default class Form extends Component {
    state = {
        username: '',
        password: ''
    }

    loginUser = () => {
        const {username, password} = this.state;

        this.props.loginUser({username, password})
    }

    createUser = () => {
        const {username, password} = this.state;
        const {onAddUser, messFun} = this.props

        if (username.length < 4) {
            messFun('userName < 4');
            return;
        }

        if (password.length < 4) {
            messFun('password < 4');
            return;
        }

        const user = {
            username,
            password
        }

        onAddUser(user)
        this.setState({username: '', password: ''})
    }

    handleChange = (event) => {
        this.setState({
            [event.target.getAttribute('id')]: event.target.value
        });
    }

    render() {
        const {username, password} = this.state;
        const {statusApp, message} = this.props;

        return (
            <div className="form">
                <div className="login">
                    <p className="mg">
                        <label htmlFor="username">Логин:</label>
                        <input
                            id='username' type="text" placeholder='Nickname'
                            value={username} onChange={this.handleChange}
                        />
                    </p>
                    <p className="mg">
                        <label htmlFor="password">Пароль:</label>
                        <input
                            id='password' type="password" placeholder='Password'
                            value={password} onChange={this.handleChange}
                        />
                    </p>
                </div>
                <p className="login-submit">
                    {
                        statusApp ?
                            <button className="btn btn-secondary" onClick={this.loginUser}>
                                Войти
                            </button>
                            :
                            <button className="btn btn-secondary" onClick={this.createUser}>Зарегистрироваться
                            </button>
                    }
                </p>
                <div className='message'>{message}</div>
            </div>
        )
    }
}