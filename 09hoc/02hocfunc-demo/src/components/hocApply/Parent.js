import React, { Component } from 'react'

export default (title) => WrappedComponent => class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    onInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    // // 获取到某个方法
    // refc(instance) {
    //     // instance.getName()  //报错
    //     // childB组件没有这个方法，先判断一下
    //     instance.getName && alert(instance.getName())
    // }

    render() {
        // 删除某个属性
        const { age, ...otherProps } = this.props

        const newProps = {
            value:this.state.value,
            onInput:this.onInputChange
        }

        return (
            <div className='parent'>
                <div className='header'>
                    <span className='msg'>{title}</span>
                    <span className='close'>X</span>
                </div>
                <div>
                    {/* 增加属性 */}
                    {/* <WrappedComponent sex='男' {...this.props} /> */}

                    {/* 删除属性 */}
                    {/* <WrappedComponent sex='男' {...otherProps} ref={this.refc.bind(this)} {...newProps} /> */}
                    <WrappedComponent sex='男' {...otherProps} {...newProps} />
                </div>
            </div>
        )
    }
}


