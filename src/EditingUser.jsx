import { Component } from "react";
export default class EditingUser extends Component{
    constructor(props){
        super()
        this.props = props;
        this.state = {fName :props.fName , lName:props.lName , age:props.age  , email:props.email  , password:props.password }
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
    valuesCheck(){
  
    }
    printdetailes(event){
        event.preventDefault()
            for (const key in this.state) {
                document.getElementById("detailes").innerHTML+=`<h1>${this.state[key]}</h1> <br>`
                if(" "){
                    alert("the editing is ok")
                }
                else{
                    alert("try again")
                }
                
            }
    }
    printFormDetailes(eve){
        eve.preventDefault()
    }
    render(){
        return(
            <div>
                <h1>EDITING-COMPONENT</h1>
                <form action=""onSubmit={(e)=>this.printFormDetailes(e)}>
                <input type="text" value={this.state.fName} onChange={(e)=>this.changefNameInput(e)}/><br/>
                    <input type="text" value={this.state.lName} onChange={(e)=>this.changelNameInput(e)}/><br/>
                    <input type="number" value={this.state.age} onChange={(e)=>this.changeAgeInput(e)}/><br/>
                    <input type="text" value={this.state.email} onChange={(e)=>this.changeEmailInput(e)}/><br/>
                    <input type="text" value={this.state.password} onChange={(e)=>this.changePasswordInput(e)}/><br/>
                    <button type="submit" onClick={(e)=>this.printdetailes(e)}>SUBMIT</button>
                </form>
                <div id="detailes">

                </div>

            </div>
        )
    }
}