import React from 'react'

const modifyPropsHOC = (WrappedComponent) => class NewComponent extends WrappedComponent {
    // 设置组件的显示名称
    static displayName = `NewComponent(${getDisplayName(WrappedComponent)})`

    componentDidMount() {
        console.log('我是修改后的组件');
    }

    render() {
        const element = super.render();
        const newStyle = {
            color: element.type === 'div' ? 'red' : 'green'
        }
        const newProps = { ...this.props, style: newStyle }
        return React.cloneElement(element, newProps, element.props.children)
    }
}

// 写一个获取display的方法
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default modifyPropsHOC