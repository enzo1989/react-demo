import React from "react"


// 得到id,发起axios请求，获取详情的数据
class Reg extends React.Component {
    componentDidMount(){
        console.log(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                <h2>Reg</h2>
            </div>
        )
    }
}

export default Reg;