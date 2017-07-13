import React,{Component} from 'react'



//跟路由组件
export default class App extends Component{
    render(){
        return(
            <div>
                <div>header</div>
                {this.props.children}
                <div>footer component...</div>
            </div>
        )
    }
}