import React, { Component } from 'react';
//导入路由依赖和组件
import { Route, Link } from "react-router-dom"

class App extends Component {
    render() {
        return (
            <>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/list">列表页</Link>
                    </li>
                    <li>
                        <Link to="/user">用户中心</Link>
                    </li>
                </ul>

                {/* 配置路由规则  exact表示精确匹配，防止匹配其他页面的时候匹配到/，也就是首页*/}
        

            </>
        )
    }
}
export default App;