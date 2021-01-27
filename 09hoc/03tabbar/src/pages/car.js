import React, { Component } from 'react'
import tabbar from '../components/Tabbar'
import carbg from '../static/images/car.png'

class Car extends Component {
    render() {
        return (
            <div>
                <div className='bg'>
                    <img src={carbg} alt='购物车' />
                </div>
            </div>
        )
    }
}

export default tabbar(Car)
