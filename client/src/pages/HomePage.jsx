import React, { Component } from 'react'

import Auth from '../components/Auth'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        this.setState({ selected: e })
    }
    render() {
        const { selected } = this.state
        return <div className="home">
            <div className="toggle-box">
                <div onClick={() => this.handleClick(1)} className={`toggle ${selected === 1 ? "selected" : ""}`}>Register</div>
                <div onClick={() => this.handleClick(2)} className={`toggle ${selected === 2 ? "selected" : ""}`}>login</div>
            </div>
            <br />
            {selected === 1 && <Auth authType="register" />}
            {selected === 2 && <Auth authType="login" />}
            <br />
        </div>
    }
}

export default HomePage