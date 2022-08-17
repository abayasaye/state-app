import { Component } from "react";
export default class EditingUser extends Component{
    constructor(props){
        super()
        this.props = props;
        this.state = {fName :props.fName , lName:props.lName , age:props.age  , email:props.email  , password:props.password }
    }
    changefNameInput(event){
        this.setState({fName:event.target.value})
        if (this.state.fName!==" ") {
            document.getElementById("inputDisplay1").innerText="valueChange"   
        }
        return
        
    }
    changelNameInput(event){
        this.setState({lName:event.target.value})
        if (this.state.lName!==" ") {
            document.getElementById("inputDisplay2").innerText="valueChange"   
        }
        return
    }
    changeAgeInput(event){
        this.setState({age:event.target.value})
        if (this.state.age!==" ") {
            document.getElementById("inputDisplay3").innerText="valueChange"   
        }
        return
    }
    changeEmailInput(event){
        this.setState({email:event.target.value})
        if (this.state.email!==" ") {
            document.getElementById("inputDisplay4").innerText="valueChange"   
        }
        return
    }
    changePasswordInput(event){
        this.setState({password:event.target.value})
        if (this.state.password!==" ") {
            document.getElementById("inputDisplay5").innerText="valueChange"   
        }
        return
    }
    printFormDetailes(event){
        event.preventDefault()
    }
    printdetailes(eve){
    eve.preventDefault()
        if(this.state.fName && this.state.lName&& this.state.age && this.state.email && this.state.password!==" "){
            alert("the form is ok");
        }else{
            alert("try again");
        }
  
     
    }
    textBisideInput(){
    
    }

    render(){
        return(
            <div>
                <h1>EDITING-COMPONENT</h1>
                <form action=""onSubmit={(e)=>this.printFormDetailes(e)}>
                <input type="text" value={this.state.fName} onChange={(e)=>this.changefNameInput(e)}/><br/>
                <span id="inputDisplay1"></span>
                    <input type="text" value={this.state.lName} onChange={(e)=>this.changelNameInput(e)}/><br/>
                <span id="inputDisplay2"></span>
                    <input type="number" value={this.state.age} onChange={(e)=>this.changeAgeInput(e)}/><br/>
                <span id="inputDisplay3"></span>
                    <input type="text" value={this.state.email} onChange={(e)=>this.changeEmailInput(e)}/><br/>
                <span id="inputDisplay4"></span>
                    <input type="text" value={this.state.password} onChange={(e)=>this.changePasswordInput(e)}/><br/>
                <span id="inputDisplay5"></span>
                    <button type="submit" onClick={(e)=>this.printdetailes(e)}>SUBMIT</button>
                </form>
                <div id="detailes">

                </div>

            </div>
        )
    }
}