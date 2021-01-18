import React, { Component } from 'react'

function parent(Comp) {
    return class Parent extends Component {
        render() {
            return (
                <div>
                    组件parent
                    <Comp />
                </div>
            )
        }
    }
}

export default parent
