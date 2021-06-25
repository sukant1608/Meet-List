import React, { Component } from 'react'
import { connect } from 'react-redux'
import api from '../services/api'

class CreateMeetPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            date: '',
            person: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state);
    }
    async handleSubmit(e) {
        console.log("it is submit");
        const { title, description, date, person } = this.state
        const response = await api.call('post', 'task/create', { title, description, date, person, username: this.props.username })
        console.log(response);
    }
    render() {
        const { title, description, date, person } = this.state
        return <div style={{ marginTop: '10%' }} className="home">
            <div className="toggle-box">
                <div style={{ width: '100%' }} className={`toggle selected`}>New Meet</div>
            </div>
            <br />
            <center>
                <input
                    value={title}
                    onChange={this.handleChange}
                    type="text"
                    name="title"
                    placeholder="Enter title for meet"
                /> <br />
                <input
                    value={description}
                    onChange={this.handleChange}
                    type="text"
                    name="description"
                    placeholder="Enter description"
                /> <br />
                <input
                    value={person}
                    onChange={this.handleChange}
                    type="text"
                    name="person"
                    placeholder="Person invited"
                /> <br />
                <input
                    value={date}
                    onChange={this.handleChange}
                    type="date"
                    name="date"
                /> <br />
                <button onClick={this.handleSubmit}>Create</button>
                <br /> <br />
            </center>
        </div>
    }
}

export default connect((store) => ({ username: store.auth.user.username }))(CreateMeetPage)