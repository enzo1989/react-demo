import React from "react"


// 得到id,发起axios请求，获取详情的数据
class Home extends React.Component {
    componentDidMount(){
        console.log(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

export default Home;