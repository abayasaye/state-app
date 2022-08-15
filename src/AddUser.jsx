import { Component } from "react";
export default class AddUser extends Component {
    constructor(){
        super()

        this.state = {fName : "No NAME" , lName:"asaye" , age:26 , email:"someEm@gmail.com" , password:" " , passwordVerification:" "}
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
    changePasswordVerification(event){
        this.setState({passwordVerification:event.target.value})
        if (this.state.password===event.target.value) {
            document.getElementById("masSpan").innerHTML=`match`
        }
        else{
            document.getElementById("masSpan").innerHTML=`unmatch`
        }
     
    }
    checkPasswords(){
        if (this.state.password===this.state.passwordVerification) {
            alert("passwords match")
        }
        else{
            alert("password dosn't match")
        }
    }
    printdetailes(event){
        event.preventDefault()
        this.checkPasswords()
        document.getElementById("table_id").innerHTML+=`
        <table>
        <thead>
            <th>fName</th>
            <th>lName</th>
            <th>age</th>
            <th>email</th>
            <th>password</th>
            <th>passwordVerification</th>
        </thead>
        <tbody>
        <tr>
        <td>${this.state.fName}</td>
        <td>${this.state.lName}</td>
        <td>${this.state.age}</td>
        <td>${this.state.email}</td>
        <td>${this.state.password}</td>
        <td>${this.state.passwordVerification}</td>
        </tr>
        </tbody>
        </table>
        `
    }
    render(){
        return(
            <div>
                <h1>add-User-Component</h1>
                <form action="" >
                    <input type="text" value={this.state.fName} onChange={(e)=>this.changefNameInput(e)}/><br/>
                    <input type="text" value={this.state.lName} onChange={(e)=>this.changelNameInput(e)}/><br/>
                    <input type="number" value={this.state.age} onChange={(e)=>this.changeAgeInput(e)}/><br/>
                    <input type="text" value={this.state.email} onChange={(e)=>this.changeEmailInput(e)}/><br/>
                    <input type="text" value={this.state.password} onChange={(e)=>this.changePasswordInput(e)}/><br/>
                    <input type="text" value={this.state.passwordVerification} onChange={(e)=>this.changePasswordVerification(e)}/><br/>
                    <span id="masSpan"></span>
                    <button type="submit" onClick={(e)=>this.printdetailes(e)}>SUBMIT</button>
                </form>
                <div id="table_id">

                </div>
                
            </div>
        )
    }

}