import React,{Component} from 'react';
//使用Link
import {Link} from 'react-router-dom'
class List extends Component{
    render(){
        return(
            <>
                <h1>列表页</h1>
                <ul>
                    <li><Link to='/detail/1'>第一号商品</Link></li>
                    <li><Link to='/detail/2'>第二号商品</Link></li>
                    <li><Link to='/detail/3'>第三号商品</Link></li>
                </ul>
            </>
        )
    }
}
export default List;