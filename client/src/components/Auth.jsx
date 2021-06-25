import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { authUser, logout } from '../store/actions'
class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            redirect: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        const { username, password } = this.state
        const { authType } = this.props
        e.preventDefault()
        this.props.authUser(authType || "register", { username, password })
        this.setState({ redirect: true })
    }

    render() {
        const { username, password, redirect } = this.state
        if (redirect) {
            return <Redirect to='/createMeet' />;
        }
        return <center>
            <form className="form" onSubmit={this.handleSubmit} action="">
                <input
                    className="form-input"
                    type="text"
                    value={username}
                    name="username"
                    autoComplete="off"
                    onChange={this.handleChange}
                    placeholder="Enter Username"
                /> <br />
                <input
                    className="form-input"
                    type="password"
                    value={password}
                    name="password"
                    autoComplete="off"
                    onChange={this.handleChange}
                    placeholder="Enter password"
                />
                <div className="button-center">
                    <button className="button" type="submit">Submit</button>
                </div>
            </form>
        </center>
    }
}
export default connect(() => ({}), { authUser, logout })(Auth)