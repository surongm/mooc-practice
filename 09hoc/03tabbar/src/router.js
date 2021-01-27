import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
    Home,
    Category,
    Car,
    User
} from './pages'

const RouterMap = () => {
    return (
        <Router>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/category' component={Category} />
                <Route path='/car' component={Car} />
                <Route path='/user' component={User} />
            </Switch>
        </Router>
    )
}

export default RouterMap