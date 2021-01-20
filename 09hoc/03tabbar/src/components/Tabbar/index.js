import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../static/iconfont.css'
import './style.css'

// 定义tarbar图标和文字
const tarbarArr = [
    {
        img: 'icon-zhuye',
        text: '首页',
        link: '/home'
    },
    {
        img: 'icon-icon04',
        text: '分类',
        link: '/category'
    },
    {
        img: 'icon-ai66',
        text: '购物车',
        link: '/car'
    },
    {
        img: 'icon-user',
        text: '我的',
        link: '/user'
    }
]

// 使用hoc
export default tabbar = () =>  class Tabbar extends Component {
    constructor() {
        super()
        this.state = {
            index: 0
        }
    }

    // itemChange = (index) => {
    //     this.setState({
    //         index: index
    //     })
    // }

    render() {
        let url = window.location.href
        return (
            <div className='tabbar'>
                <div className="tabbar-content">
                    {
                        tarbarArr.map((tarbar, index) => (
                            <Link to={tarbar.link}
                                key={index}
                                // 根据路由地址
                                className={"tarbar-item " + (url.indexOf(tarbar.link) > -1 ? 'active' : '')}
                            // 使用不同的页面之后 使用下标不生效了
                            // className={"tarbar-item " + (this.state.index === index ? 'active' : '')}
                            // 使用Link 不需要点击事件了
                            // onClick={() => this.itemChange(index)}
                            >
                                <div className={'iconfont ' + tarbar.img}></div>
                                <div className='item-text'>{tarbar.text}</div>
                            </Link>
                        ))
                    }
                    {/* <div className="iconfont icon-zhuye"></div> */}
                </div>
            </div>
        )
    }
}

// export default class Tabbar extends Component {
//     constructor() {
//         super()
//         this.state = {
//             index: 0
//         }
//     }

//     // itemChange = (index) => {
//     //     this.setState({
//     //         index: index
//     //     })
//     // }

//     render() {
//         let url = window.location.href
//         return (
//             <div className='tabbar'>
//                 <div className="tabbar-content">
//                     {
//                         tarbarArr.map((tarbar, index) => (
//                             <Link to={tarbar.link}
//                                 key={index}
//                                 // 根据路由地址
//                                 className={"tarbar-item " + (url.indexOf(tarbar.link) > -1 ? 'active' : '')}
//                             // 使用不同的页面之后 使用下标不生效了
//                             // className={"tarbar-item " + (this.state.index === index ? 'active' : '')}
//                             // 使用Link 不需要点击事件了
//                             // onClick={() => this.itemChange(index)}
//                             >
//                                 <div className={'iconfont ' + tarbar.img}></div>
//                                 <div className='item-text'>{tarbar.text}</div>
//                             </Link>
//                         ))
//                     }
//                     {/* <div className="iconfont icon-zhuye"></div> */}
//                 </div>
//             </div>
//         )
//     }
// }
