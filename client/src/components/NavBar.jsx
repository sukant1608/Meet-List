import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../store/actions';

const NavBar = ({ auth, logout }) => {
    return <div className="navbar">
        <div className="container" >
            <ul className="navbar-container">
                <li>
                    <Link className="navbar-brand" to="/">Home</Link>
                </li>
                <li>

                    {auth.isAuthenticated && (<Link to='/dashboard' className="navbar-item">Meet List</Link>)}
                </li>
                {auth.isAuthenticated && (<>
                    <li>
                        <Link className="navbar-item" to="/createMeet">Create Meet</Link>
                    </li>
                    <li>
                        <a className="navbar-item" onClick={logout}>Logout</a>
                    </li>
                </>)}
                <li>

                    {auth.isAuthenticated && (<a className="navbar-item">Logged in as {auth.user.username}</a>)}
                </li>

            </ul>
        </div>
    </div>
}

export default connect(store => ({ auth: store.auth }), { logout })(NavBar)