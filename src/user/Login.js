import React from "react"


// 得到id,发起axios请求，获取详情的数据
class Login extends React.Component {
    componentDidMount(){
        console.log(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                <h2>username</h2>
                <h4>password</h4>
            </div>
        )
    }
}

export default Login;