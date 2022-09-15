import { Component } from "react";
export default class Family extends Component {
    constructor(props){
        super()
        this.state = {lastName:props.lastName}
    }
    chaneLastName(event){
        this.setState({lastName:event.target.value})
    }
    componentWillMount(){
        alert("welcome")
    }
    componentDidMount(){
        console.log("hello");
    }
    componentWillUpdate(){
        console.log("before")
    }
    componentDidUpdate(){
        alert("after")
    }
    render(){
        return(
            <div>
                <h1>{this.state.lastName}</h1>
                <input type="text" value={this.state.lastName} onChange={(e)=>this.chaneLastName(e)} placeholder="enter last name"/>
            </div>
        )
        
    }

}