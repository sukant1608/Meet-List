import React, { Component } from 'react'
import { connect } from 'react-redux'
import api from '../services/api'

class DashboardPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meets: []
        }
        // window.location.reload()
    }
    async componentDidMount() {

        const data = await api.call("get", `task/${this.props.username}`)
        this.setState({ meets: data })
    }
    handleDelete = value => async () => {
        const objectid = value._id
        const username = this.props.username
        api.call('post', `task/delete`, { objectid, username })
        this.componentDidMount()
    };
    render() {
        const { meets } = this.state
        return < >
            {meets.map((meet) => {
                return <div class="topnav">
                    <a style={{ textDecoration: 'underline', }} class="active" >{meet.title}</a>
                    <a >{meet.description}</a>

                    <a >Organizer - {meet.organizer}</a>
                    <a >Attendent - {meet.attendent}</a>
                    <div class="topnav-right">
                        <a style={{ background: 'darkblue' }} >{meet.pending}</a>
                        <a onClick={this.handleDelete(meet)} style={{ background: 'red', cursor: 'pointer' }}>Delete</a>
                    </div>
                </div>
            })}
        </>
    }
}

export default connect((store) => ({ username: store.auth.user.username }))(DashboardPage)