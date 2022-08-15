import { Component } from "react";
import AddUser from "./AddUser";
export default class Home extends Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div>
                <h1>HOME-COMPONENT</h1>
               <AddUser/>
               <hr/>
            </div>
        )
    }
}