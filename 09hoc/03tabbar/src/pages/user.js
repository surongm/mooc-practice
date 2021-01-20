import React, { Component } from 'react'
import tabbar from '../components/Tabbar'
import userbg from '../static/images/user.png'

@tabbar
export default class User extends Component {
    render() {
        return (
            <div>
                <div className='bg'>
                    <img src={userbg} alt='用户' />
                </div>
                <Tabbar />
            </div>
        )
    }
}
