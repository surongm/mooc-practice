import React, { Component } from 'react'
import tabbar from '../components/Tabbar'
import categorybg from '../static/images/category.png'

@tabbar
class Category extends Component {
    render() {
        return (
            <div>
                <div className='bg'>
                    <img src={categorybg} alt='分类' />
                </div>
            </div>
        )
    }
}

export default Category