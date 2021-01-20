import React, { Component } from 'react'

function parent(Comp) {
    return class Parent extends Component {
        render() {
            return (
                <div className='parent'>
                    <div className='header'>
                        <span className='msg'>提示</span>
                        <span className='close'>X</span>
                    </div>
                    <div>
                        <Comp />
                    </div>
                </div>
            )
        }
    }
}

export default parent
