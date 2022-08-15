import { Component } from "react";

export default class User extends Component {
    constructor(props){
       super()
       this.state = {fName : "No NAME" , lName:"asaye" , age:26 , email:"someEm@gmail.com" , password:"asas12@#$%%"}
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
    }
    printFormDetailes(event){
        event.preventDefault()
        document.getElementById("table").innerHTML+=`
        <table>
        <thead>
            <th>fName</th>
            <th>lName</th>
            <th>age</th>
            <th>email</th>
            <th>password</th>
        </thead>
        <tbody>
        <tr>
        <td>${this.state.fName}</td>
        <td>${this.state.lName}</td>
        <td>${this.state.age}</td>
        <td>${this.state.email}</td>
        <td>${this.state.password}</td>
        </tr>
        </tbody>
        </table>
        `
    }
    render(){
        return(
            <div>
                <h1>{this.state.fName}</h1>
                <button onClick={this.printMyName}>PrintMyName</button>
                <button onClick={()=>this.changeFnameToMyName()}>changeName</button>

                <form action="">
                <input type="text" value={this.state.fName} onChange={(e)=>this.changefNameInput(e)}/><br/>
                <input type="text" value={this.state.lName} onChange={(e)=>this.changelNameInput(e)}/><br/>
                <input type="number" value={this.state.age} onChange={(e)=>this.changeAgeInput(e)}/><br/>
                <input type="text" value={this.state.email} onChange={(e)=>this.changeEmailInput(e)}/><br/>
                <input type="text" value={this.state.password} onChange={(e)=>this.changePasswordInput(e)}/><br/>
                <button type="submit" onClick={(e)=>this.printFormDetailes(e)}>SUBMIT</button>
                </form>
                <div id="table">

                </div>
                <hr/>
            </div>
        )
    }
}
