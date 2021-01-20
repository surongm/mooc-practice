import React, { Component } from 'react'
import tabbar from '../components/Tabbar'
import homebg from '../static/images/home.png'

@tabbar
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className='bg'>
                    {/* 无法显示 */}
                    {/* <img src={require("../static/images/home.png")} alt='' /> */}
                    <img src={homebg} alt='首页' />
                </div>
                <Tabbar />
            </div>
        )
    }
}
