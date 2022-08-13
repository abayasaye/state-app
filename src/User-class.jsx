import { Component } from "react";

class User extends Component {
    constructor(props){
       super()
       this.state = {fName : "No NAME" , lName:"asaye" , age:26 , email:"someEm@gmail.com" , password:"asas12@#$%%", printer:""}
    }
    changeText(){

    }
    printMyName(){
        console.log("Abayneh Asaye")
    }
    changeFnameToMyName(){
        this.setState({fName: "Abayneh"})
    }
    changefNameInput(event){
        this.setState({fName:event.target.value})
    }
    changelNameInput(event){
        this.setState({lName:event.target.value})
    }
    changeAgeInput(event){
        this.setState({age:event.target.value})
    }
    changeEmailInput(event){
        this.setState({email:event.target.value})
    }
    changePasswordInput(event){
        this.setState({password:event.target.value})
    }
    printForm(event){
        event.preventDefault()
        return(
            
            console.log(event.target)
        )
    }
    render(){
        return(
            <div>
                <h1>{this.state.fName}</h1>
                <button onClick={this.printMyName}>PrintMyName</button>
                <button onClick={()=>this.changeFnameToMyName()}>changeName</button>
                <form action=""onSubmit={(e)=>this.printForm(e)}>
                <input type="text" value={this.state.fName} onChange={(e)=>this.changefNameInput(e)}/><br/>
                <input type="text" value={this.state.lName} onChange={(e)=>this.changelNameInput(e)}/><br/>
                <input type="number" value={this.state.age} onChange={(e)=>this.changeAgeInput(e)}/><br/>
                <input type="text" value={this.state.email} onChange={(e)=>this.changeEmailInput(e)}/><br/>
                <input type="text" value={this.state.password} onChange={(e)=>this.changePasswordInput(e)}/><br/>
                <button type="submit">SUBMIT</button>
                </form>
                <div>{this.state.printer}</div>
                <table>
                    <thead>
                        <th>{this.fName}</th>
                        <th>{this.lName}</th>
                        <th>{this.age}</th>
                        <th>{this.email}</th>
                        <th>{this.password}</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default User