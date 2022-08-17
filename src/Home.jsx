import { Component } from "react";
import AddUser from "./AddUser";
import EditingUser from "./EditingUser";
export default class Home extends Component{
    constructor(props){
        super()
    }
    chageComponents(){
    switch (<EditingUser/>) {
        case <EditingUser/>:
            this.setState(EditingUser)
            break;
    
        default:
            break;
    }
    }
    render(){
        return(
            <div>
                <h1>HOME-COMPONENT</h1>
               <AddUser/>
               <hr />
               <EditingUser/>
               <hr/>
               <button onClick={()=>this.chageComponents()}>clickToChange</button>
            </div>
        )
    }
}