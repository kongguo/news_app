import React,{Component} from 'react'
import {Link} from 'react-router'

//首页显示各种新闻列表组件
export default class NewsContainer extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/detail/1">新闻</Link>
                    </li>
                    <li>
                        <Link to="/detail/2">人民</Link>
                    </li>
                    <li>
                        <Link to="usercenter">个人中心</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
