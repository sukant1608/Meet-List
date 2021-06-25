import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CreateMeetPage from '../pages/CreateMeet'
import DashboardPage from '../pages/Dashboard'

const RouteViews = () => {
    return <main>
        <Switch>
            <Route
                exact
                path="/"
                render={() => <HomePage />}
            />
            <Route
                exact
                path='/createMeet'
                render={() => <CreateMeetPage />}
            />
            <Route
                exact
                path='/dashboard'
                render={() => <DashboardPage />}
            />
        </Switch>
    </main>
}

export default withRouter(RouteViews)